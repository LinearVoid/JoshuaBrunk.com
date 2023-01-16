
import './App.css';
import Navbar from "./Components/Navbar.js"
import AboutMe from "./Components/Aboutme"
import Skills from "./Components/Skills"
import Projects from './Components/Projects';
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      
    </div>
  );
}

export default App;
