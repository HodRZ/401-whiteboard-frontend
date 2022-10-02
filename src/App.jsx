import './App.css';
import Hero from './components/main/Hero';
import Sidebar from './components/main/Sidebar';
import Post from './components/post/Post';
import Auth from './components/user/Auth';
import { AppDataProvider } from './State/PostsContext';
import { useAuth } from './State/AuthContext'


function App() {
  const { userState } = useAuth()
  return (
    <div className="App pl-[4.9rem]">
      <Sidebar />
      <Hero />
      <AppDataProvider>
        {true &&
          ((userState.isLoggedIn && userState.loggedUser) ?
            <Post /> :
            <Auth />)
        }
      </AppDataProvider>
    </div>
  );
}

export default App;
