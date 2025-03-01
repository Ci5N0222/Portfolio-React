import { useRef } from 'react';
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './pages/Main/Main'

function App() {

  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const careerRef = useRef(null);
  const projectRef = useRef(null);

  const list :any[] = [ aboutMeRef, skillsRef, careerRef, projectRef];

  const scrollToSection = (ref :any) => {
    ref.current.scrollIntoView({ behavior : "smooth" });
  }

  return (
    <>
      <Header list={ list } scrollToSection={ scrollToSection }/>
      <Main list={ list }/>
      <Footer />
    </>
  )
}

export default App
