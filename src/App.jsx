import React from 'react'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import About from './components/about/About.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Experience from './components/projects/Projects.jsx'



const  App = () => {
  return (
  <>
    <Header />
    <Navigation />
    <About />
    <Experience />
    <Footer />
  </>
  )
}

export default App
