import './App.css';
import Hero from './components/main/Hero';
import Sidebar from './components/main/Sidebar';
import Post from './components/post/Post';

function App() {
  return (
    <div className="App ml-[4.9rem] ">
      <Sidebar />
      <Hero />
      <Post />
    </div>
  );
}

export default App;
