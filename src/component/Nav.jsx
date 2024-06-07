import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'



export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };



  return (
    
    <div className="fixed top-0 left-0 h-[5rem] w-full  bg-white dark:slate-800  z-50  ">
      <nav className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold select-none">aashutosh.dev</h1>
        <button className="md:hidden focus:outline-none select-none text-black hover:text-gray-400" onClick={toggleMenu}>
          {showMenu ? (<i class="fa-solid fa-xmark" />) : (<i className="fa-solid fa-bars" />)}
        </button>
        <ul className={`absolute top-full left-0 w-full md:static md:flex flex-col space-x- md:flex-row md:space-x-0 bg-white  md:justify-end transition duration-300 ease-in-out ${showMenu ? 'block' : 'hidden'}`}>
          <li><Link to="/" className=" text-zinc-900 hover:text-sky-500 py-2 px-2 md:py-0">Home</Link></li>
          <li><Link to="/about" className=" text-zinc-900 hover:text-sky-500 py-2 px-2 md:py-0">About</Link></li>
          <li><Link to="/project" className=" text-zinc-900 hover:text-sky-500 py-2 px-2 md:py-0">Project</Link></li>
          <li><Link to="/contact" className=" text-zinc-900 hover:text-sky-500 py-2 px-2 md:py-0">Contact</Link></li>
          <button className="absolute top-0 right-0 p-4 focus:outline-none  2xl:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="hidden h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </ul>
      </nav>
    </div>
  )
}