import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddCommentForm from './Add-comment-form';
import AddPostForm from './Add-post-form';
import PostsCard from './PostsCard';

function Post(props) {
    const [posts, setPosts] = useState()

    const getPosts = async () => {
        const postsData = await axios.get(`${process.env.REACT_APP_PORT}/postAll?filter=comments`)
        setPosts(postsData.data)
    }
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <div>

            {posts &&
                <PostsCard posts={posts} getPosts={getPosts} />}
            <AddPostForm />
            <AddCommentForm />
        </div>
    );
}

export default Post;