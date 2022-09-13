import axios from 'axios';
import React from 'react';

function AddPostForm(props) {
    const addPost = async (e) => {
        e.preventDefault()
        const data = {
            content: e.target.content.value,
            title: e.target.title.value
        }
        await axios.post(`${process.env.REACT_APP_PORT}/post`, data)
    }

    return (
        <div className='mx-20 gap-8'>
            <form className='flex flex-col text-center font-mono' onSubmit={addPost}>
                <label>post title</label>
                <input type="text" name='title' className='border border-black rounded-lg bg-slate-300' />
                <label>give it your best</label>
                <input type="text" name='content' className='border border-black rounded-lg bg-slate-300' />
                <div className='flex justify-center gap-16 '>
                    <button className='border-b-2 w-fit  border-zinc-400 rounded-lg'>post</button>
                </div>
            </form>
        </div>
    );
}

export default AddPostForm;