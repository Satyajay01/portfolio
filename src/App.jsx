import { useState } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App
