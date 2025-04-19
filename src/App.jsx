import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About'


function App() {
  return (
    <>
      <Header />
      <Project />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App