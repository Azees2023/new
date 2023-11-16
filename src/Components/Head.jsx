import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PiHamburgerLight } from "react-icons/pi";





const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleNavbar = () => {
    setMenuOpen(!menuOpen)
  }

  const Location = useLocation ();

  useEffect(() => {
    setMenuOpen(false)
  },[Location])


  return (
    <div className={`bg-gray-900 bg-transparent sticky `}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-4">
          <div className="text-white text-2xl font-bold ">
            Developer
          </div>
          <div className='md:hidden'>
            <button className="text-white text-2xl hover:text-orange-500" onClick={toggleNavbar}>
              <PiHamburgerLight />
            </button>
          </div>  
          <div className="hidden md:flex space-x-4 " >
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/Project"  className="text-white hover:text-gray-300">Project</Link>
            <Link to="/Contact"  className="text-white hover:text-gray-300">Contact</Link>
          </div>
          {menuOpen && (
            <div className="md:hidden z-50 absolute top-16 right-0 bg-gray-900 w-full">
              <Link to="/" className="block text-white p-12  hover:text-gray-300 duration-500">
                Home
              </Link>
              <Link to="/Project" className="block text-white p-12 hover:text-gray-300 duration-500">
                Project
              </Link>
              <Link to="/Contact" className="block text-white p-12 hover:text-gray-300 duration-500">
                Contact
              </Link>
            </div>
          )}
        </nav>
      </div>
   </div>

  )
}

export default Head