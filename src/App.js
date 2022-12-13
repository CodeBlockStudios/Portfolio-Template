import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div className='grid gap-40 mt-12'>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App;