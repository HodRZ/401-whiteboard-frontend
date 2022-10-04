import './App.css';
import Hero from './components/main/Hero';
import Sidebar from './components/main/Sidebar';
import Post from './components/post/Post';
import Auth from './components/user/Auth';
import { AppDataProvider } from './State/PostsContext';
import { useAuth } from './State/AuthContext'
import Loading from './components/main/Loading';


function App() {
  const { userState, loading } = useAuth()
  return (
    <div className="App pl-[4.9rem]">
      <Sidebar />
      <Hero />
      <AppDataProvider>
        {(loading) ?
          <Loading /> :
          ((userState.isLoggedIn && userState.loggedUser) ?
            <Post /> :
            <Auth />)
        }
      </AppDataProvider>
    </div>
  );
}

export default App;
