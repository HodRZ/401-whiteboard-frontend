import './App.css';
import Hero from './components/main/Hero';
import Sidebar from './components/main/Sidebar';
import Post from './components/post/Post';
import Auth from './components/user/Auth';
import { AppDataProvider } from './State/PostsContext';
import { useAuth } from './State/AuthContext'


function App() {
  const { userState } = useAuth()
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [user, setUser] = useState()
  // const [loading, setLoading] = useState(true)

  // const login = async (loggedUser) => {
  //   setIsLoggedIn(true);
  //   setUser(loggedUser)
  // }
  // const logout = async () => {
  //   try {
  //     await axiosPrivate.delete(`/silent`)
  //       .catch(e => console.error(e))
  //       .finally(() => setIsLoggedIn(false))
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // useEffect(() => {
  //   async function getUser() {
  //     try {
  //       await axiosPrivate.post(`/silent`).then(res => {
  //         setUser(res.data)
  //         setIsLoggedIn(true)
  //       })
  //         .catch(e => alert("Sorry your session ended!"))
  //         .finally(() => setLoading(false))
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   getUser()
  // }, [])
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
