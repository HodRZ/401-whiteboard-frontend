import React from 'react';
import { usePosts } from '../../State/PostsContext';
import { actions } from '../../State/PostsReducer';

function EditPost(props) {
    const { dispatch } = usePosts()
    const handleEdit = (e) => {
        e.preventDefault()
        props.editPost(e)
    }
    return (
        <div className='h-[100vh] absolute z-10 w-[90%] bg-zinc-400 bg-opacity-90 flex justify-center'>
            <div className='z-20 my-auto h-fit w-[50%] bg-white relative inset- top-0 right-0 left-0 bg-opacity-90'>
                <div className='md:flex place-content-center '>
                    <div className='mx-5 my-8  shadow-md p-6 md:w-[100%] '>
                        <form className='flex flex-col gap-2 text-center font-mono' id={props?.post?.id} onSubmit={handleEdit} >
                            <div className='flex justify-between md:gap-3 h-full '>
                                {/* <label className='w-[10%]'>title</label> */}
                                <input type="text" name='title' defaultValue={props?.post?.title} className='border md:w-[93%] w-full border-action rounded-lg ' />
                            </div>
                            {/* <label>give it your best</label> */}
                            <textarea type="text" name='content' defaultValue={props?.post?.content} className='border border-action rounded-lg ' />
                            <div className='flex justify-center gap-16 '>
                                <button className='border-b-2 hover:bg-purple-900 hover:text-action w-[20%] shadow-lg rounded-lg'>edit</button>
                                <button className='border-b-2 hover:bg-purple-900 hover:text-action w-[20%] shadow-lg rounded-lg'
                                    onClick={() => {
                                        dispatch({
                                            type: actions.showEditPost,
                                            payload: false
                                        })
                                    }}>cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPost;