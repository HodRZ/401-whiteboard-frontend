import { useEffect } from 'react';
import { useState } from 'react';
import cookies from 'react-cookies';
import axios, { axiosPrivate } from './api/axios';
import './App.css';
import Hero from './components/main/Hero';
import Sidebar from './components/main/Sidebar';
import Post from './components/post/Post';
import Auth from './components/user/Auth';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState()

  const login = async (loggedUser) => {
    setIsLoggedIn(true);
    setUser(loggedUser)
  }
  const logout = async () => {
    cookies.remove('token')
    setIsLoggedIn(false)
  }
  useEffect(() => {
    const token = cookies.load('token')
    async function getUser(id) {
      const singnedUser = await axios.get(`/user/${id}`)
      setUser(singnedUser.data)
    }
    if (token) {
      const id = cookies.load('userId')
      getUser(id)
      setIsLoggedIn(true)
    }
  }, [])
  return (
    <div className="App pl-[4.9rem]">
      <Sidebar isLoggedIn={isLoggedIn} logout={logout} />
      <Hero />
      {(isLoggedIn && user) ? <Post user={user} /> : <Auth login={login} />}
    </div>
  );
}

export default App;
