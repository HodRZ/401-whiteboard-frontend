import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
function PostsCard(props) {
    const [comment, setComment] = useState(false)
    const [post, setPost] = useState()
    const [showPost, setShowPost] = useState(true)

    const getPost = async () => {
        const id = props.post.id
        const updatedPost = await axios.get(`${process.env.REACT_APP_PORT}/post/${id}?filter=comments`)
        setPost(updatedPost.data)
    }

    const addComment = async (e) => {
        e.preventDefault()
        const id = e.target.id
        const newCmnt = {
            content: e.target.comment.value
        }
        await axios.post(`${process.env.REACT_APP_PORT}/post/${id}/comment`, newCmnt)
        e.target.comment.value = ''
        setComment(!comment)
        getPost()
    }

    const deleteComment = async (e) => {
        e.preventDefault()
        const id = e.target.id
        await axios.delete(`${process.env.REACT_APP_PORT}/comment/${id}`)
        getPost()
    }


    const deletePost = async (e) => {
        e.preventDefault()
        const id = e.target.id
        await axios.delete(`${process.env.REACT_APP_PORT}/post/${id}`)
        setShowPost(false)
    }
    useEffect(() => {
        getPost()
    },)
    return (
        <>
            {showPost &&
                <div key={post?.id} className=' bg-slate-200 border-2 flex flex-col border-slate-700 rounded-md h-fit '>
                    <div className='flex justify-between'>
                        <h2 className='text-center text-2xl mx-3 my-5'>{post?.title}</h2>
                        <form onSubmit={deletePost} id={post?.id} className='mt-3'>
                            <button className='text-xl'><AiFillDelete className='h-6 w-fit border-2 m-2 rounded-full bg-slate-500 text-white border-white hover:bg-white hover:text-slate-500' /></button>
                        </form>
                    </div>
                    <p className='mx-5 my-8'>{post?.content}</p>
                    <div className='bg-white flex flex-col gap-3 my-2'>
                        {post?.comments &&
                            post.comments.map((comment) => {
                                return <div className='flex justify-between'>
                                    <p className='px-5 border-t-2'>{comment.content}</p>
                                    <button className='mx-2 text-sm border rounded-xl hover:bg-black hover:text-white border-black' id={comment.id} onClick={deleteComment} >delete</button>
                                </div>
                            }
                            )}
                    </div>
                    <form className='flex flex-col my-3 place-items-center text-center' id={post?.id} onSubmit={addComment}>
                        <input type="text" name='comment' placeholder='comment' className='w-full border border-black rounded-lg bg-slate-300 my-4' />
                        <button className='border-b-2 border-black rounded-xl w-16'>comment</button>
                    </form>
                </div>
            }
        </>
    );
}

export default PostsCard;