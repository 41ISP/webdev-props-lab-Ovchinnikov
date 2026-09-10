import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Courses from "./Components/Courses.jsx";
import Testimonials from './Components/Testimonials.jsx'
import Footer from './Components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero/>
      <Courses/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
