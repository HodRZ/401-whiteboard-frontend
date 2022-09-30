import { createContext, useState, useEffect } from 'react';
import { axiosPrivate } from '../api/axios';

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const login = async (loggedUser) => {
        setIsLoggedIn(true);
        setUser(loggedUser)
    }
    const logout = async () => {
        try {
            await axiosPrivate.delete(`/silent`)
                .catch(e => console.error(e))
                .finally(() => setIsLoggedIn(false))
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        async function getUser() {
            try {
                await axiosPrivate.post(`/silent`).then(res => {
                    setUser(res.data)
                    setIsLoggedIn(true)
                })
                    .catch(e => alert("Sorry your session ended!"))
                    .finally(() => setLoading(false))
            } catch (e) {
                console.log(e)
            }
        }
        getUser()
    }, [])
    return (
        <UserContext.Provider
            value={{
                isLoggedIn, setIsLoggedIn,
                user, setUser,
                loading, setLoading,
                login, logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext