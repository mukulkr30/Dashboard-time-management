import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Mainbody from './component/MainBody'

function App() {
  
  return (
    <div className='body'>
      <Header/>
      <Mainbody/>
      <Footer/>
    </div>
  )
}

export default App
