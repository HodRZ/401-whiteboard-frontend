import React from 'react';
import AddPostForm from './Add-post-form';
import PostsCard from './PostsCard';
import { usePosts } from '../../State/PostsContext';
import { useAuth } from '../../State/AuthContext';
function Post(props) {
    const { state } = usePosts()
    const { userState } = useAuth()


    return (
        < div >

            <AddPostForm />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-4 font-mono gap-x-5 gap-y-8'>

                {state.posts && state.posts.map((post) => {
                    let user = {};
                    if (post.UserId === userState.loggedUser.id) {
                        user = userState.loggedUser
                    }
                    return <PostsCard key={post.id} post={post} author={user} />
                })}
            </div>
        </div >
    );
}

export default Post;