import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Project from './Components/project'
import Skills  from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='min-h-full'>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default App
