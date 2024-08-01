import { useState } from 'react'
import Navbar from './Components/Navigation/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Slider from './Components/Slider/Slider'
import Why from './Components/Why/Why'
import Faq from './Components/FAQ/faq'
import Secondlast from './Components/SecondLast/Secondlast'
import Footer from './Components/Footer/footer'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Slider/>
    <Why/>
    <Faq/>
    <Secondlast/>
    <Footer/>
    </>
  )
}

export default App
