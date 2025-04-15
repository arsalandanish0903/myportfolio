import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <header className="w-full fixed top-0 px-6 lg:px-0 py-5 left-0 z-50 bg-[#0f172a] shadow-lg font-poppins">
      <div className="max-w-[1140px] container mx-auto flex justify-between items-center  text-white">
        {/* Logo with hover effect */}
        <h1 className="text-2xl font-bold text-teal-400 hover:scale-105 transition-transform duration-300 cursor-pointer">
          {/* <span className="relative group">
            <span className="relative z-10">Danish.dev</span>
            <span className="absolute inset-0 w-full h-full bg-teal-400 rounded-md opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </span> */}
          <img src="/d__1_-removebg-preview.png" alt="" className='w-32'/>
        </h1>

        {/* Desktop Nav with enhanced hover effects */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li className="relative group">
            <a href='#home' className="cursor-pointer hover:text-teal-400 transition-colors duration-300">
              Home
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href='#about' className="cursor-pointer hover:text-teal-400 transition-colors duration-300">
              About
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href='#services' className="cursor-pointer hover:text-teal-400 transition-colors duration-300">
              Services
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href='#projects' className="cursor-pointer hover:text-teal-400 transition-colors duration-300">
              Projects
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href='#contact' className="cursor-pointer hover:text-teal-400 transition-colors duration-300">
              Contact
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Mobile Icon with hover effect */}
        <div 
          onClick={toggleNav} 
          className="md:hidden z-50 cursor-pointer p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
        >
          {navOpen ? (
            <FaTimes size={24} className="text-teal-400 hover:rotate-90 transition-transform duration-300" />
          ) : (
            <FaBars size={24} className="hover:rotate-180 transition-transform duration-300" />
          )}
        </div>

        {/* Mobile Nav with enhanced effects */}
        <ul
          className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#0f172a]/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-2xl font-semibold transition-all duration-500 ease-in-out ${
            navOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          {[{name: 'Home', id: '#home'}, {name: 'About', id: '#about'}, {name: 'Services', id: '#services'}, {name: 'Projects', id: '#projects'}, {name: 'Contact', id: '#contact'}].map((item, index) => (
            <li 
              key={index}
              onClick={toggleNav} 
              className="relative group px-4 py-2"
            >
              <a href={item.id} className="cursor-pointer hover:text-teal-400 transition-colors duration-300">
                {item.name}
              </a>
              <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-teal-400 transform -translate-x-1/2 transition-all duration-300 group-hover:w-3/4"></span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header