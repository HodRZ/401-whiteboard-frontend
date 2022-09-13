import React from 'react';
import AddCommentForm from './Add-comment-form';
import AddPostForm from './Add-post-form';

function Post(props) {
    return (
        <div>
            <h2>hello</h2>
            <AddPostForm />
            <AddCommentForm />
        </div>
    );
}

export default Post;