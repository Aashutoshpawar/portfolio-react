import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "./component/Nav"
import Home from './component/Home'
import About from './component/About';
import Contact from './component/Contact';
import Project from './component/Project';




function App() {
  return (
    <div className=' h-screen w-full '>

      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Project' element={<Project/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
