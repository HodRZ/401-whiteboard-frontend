import './App.css';
import Hero from './components/main/Hero';
import Sidebar from './components/main/Sidebar';
import Post from './components/post/Post';

function App() {
  return (
    <div className="App pl-[4.9rem] bg-yolk1">
      <Sidebar />
      <Hero />
      <Post />
    </div>
  );
}

export default App;
