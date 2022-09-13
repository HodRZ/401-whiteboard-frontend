import axios from 'axios';
import React, { useState } from 'react';

function PostsCard(props) {
    const [comment, setComment] = useState(false)

    const addComment = async (e) => {
        e.preventDefault()
        const id = e.target.id
        const newCmnt = {
            content: e.target.comment.value
        }
        await axios.post(`${process.env.REACT_APP_PORT}/post/${id}/comment`, newCmnt)
        props.getPosts()
        setComment(!comment)
    }

    const deleteComment = async (e) => {
        e.preventDefault()
        const id = e.target.id
        await axios.delete(`${process.env.REACT_APP_PORT}/comment/${id}`)
        props.getPosts()
    }
    const showComment = () => {
        setComment(!comment)
    }
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-4 font-mono gap-x-5 gap-y-8'>
            {
                props.posts.map((post) => {

                    return <div key={post.id} className=' bg-slate-200 border-2 flex flex-col border-slate-700 rounded-md h-fit '>
                        <h2 className='text-center text-2xl my-5'>{post.title}</h2>
                        <p className='mx-5 my-8'>{post.content}</p>
                        <div className='bg-white flex flex-col gap-3 my-2'>
                            {post.comments[0] && post.comments.map((comment) => {
                                return <div className='flex justify-between'>
                                    <p className='px-5 border-t-2'>{comment.content}</p>
                                    <button className='mx-2 text-sm border rounded-xl hover:bg-black hover:text-white border-black' id={comment.id} onClick={deleteComment} >delete</button>
                                </div>
                            }
                            )}
                        </div>
                        <button type="button" onClick={showComment} className='border-b-2 mx-auto my-3 border-zinc-400 rounded-lg'>comment</button>
                        {comment &&
                            <form className='flex flex-col my-3' id={post.id} onSubmit={addComment}>
                                <input type="text" name='comment' placeholder='comment' className='border border-black rounded-lg bg-slate-300 my-4' />
                                <button>comment</button>
                            </form>
                        }

                    </div>
                })
            }
        </div>
    );
}

export default PostsCard;