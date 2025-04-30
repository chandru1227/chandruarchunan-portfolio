import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <div className="w-full bg-black text-gray-300 py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Chandru A</h2>
            <p className="text-sm mt-1">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/chandru1227" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chandrua" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:chandruarchunan04@gmail.com" 
              className="hover:text-white transition-colors duration-300"
            >
              <HiOutlineMail size={24} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} - Designed & Developed by Chandru A</p>
        </div>
      </div>
    </div>
  )
}

export default Footer