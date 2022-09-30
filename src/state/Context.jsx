import { createContext, useState, useEffect } from 'react';
import axios from '../api/axios';

const AppDataContext = createContext({})

export const AppDataProvider = ({ children }) => {
    const [posts, setPosts] = useState()
    const [comment, setComment] = useState(false)
    const [showEdit, setShowEdit] = useState(false)



    const getPosts = async () => {
        const postsData = await axios.get(`/postAll`)
        setPosts(postsData.data)
    }
    const updatePosts = (post) => {
        setPosts([...posts, post])
    }

    useEffect(() => {
        getPosts()
    }, [])
    return (
        <AppDataContext.Provider
            value={{
                posts, setPosts,
                comment, setComment,
                showEdit, setShowEdit,
                getPosts, updatePosts
            }
            }>
            {children}
        </AppDataContext.Provider>
    );
}

export default AppDataContext;