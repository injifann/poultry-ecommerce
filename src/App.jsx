import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from './components/maincomponents/MainContent'
import Header from './components/maincomponents/Header'
import Footer from './components/maincomponents/Footer'

function App() {


  return (

    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
  
}


export default App
