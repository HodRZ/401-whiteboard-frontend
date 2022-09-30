import React, { useContext } from 'react';
import AddPostForm from './Add-post-form';
import PostsCard from './PostsCard';
import AppDataContext from '../../state/Context';
function Post(props) {
    const { state } = useContext(AppDataContext)
    // const [posts, setPosts] = useState()

    // const getPosts = async () => {
    //     const postsData = await axios.get(`/postAll`)
    //     setPosts(postsData.data)
    // }
    // const updatePosts = (post) => {
    //     setPosts([...posts, post])
    // }

    return (
        < div >

            <AddPostForm user={props.user} />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-4 font-mono gap-x-5 gap-y-8'>

                {state.posts && state.posts.map((post) => {
                    let user = {};
                    if (post.UserId === props.user.id) {
                        user = props.user
                    }
                    return <PostsCard key={post.id} post={post} loggedUser={props.user} author={user} />
                })}
            </div>
        </div >
    );
}

export default Post;