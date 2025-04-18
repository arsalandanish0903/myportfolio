import React, { useEffect, useState } from 'react'
import Loader from './Components/Loader/Loader'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import AboutMe from './Components/AboutMe/AboutMe'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Simulate 2s loading

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Home />
          <AboutMe />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
