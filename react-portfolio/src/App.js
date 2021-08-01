import './App.css';
import Projects from './Projects'
import { FaReact } from "react-icons/fa";

function App() {
  return (
    <>
      <div className = 'typewriter'>
        <h1 className="line-1 anim-typewriter">Haseeba's React Projects  <FaReact/></h1>
      </div>
      <Projects/>
    </>
  );
}

export default App;
