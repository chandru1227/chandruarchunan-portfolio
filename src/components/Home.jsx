import React from 'react';
import HeroImage from "../assets/Chandru A.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div 
      name='home' 
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'
    >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full animate-fadeIn'>
          <div className='animate-slideDown'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
              I'm a <span className='text-blue-400'>Full Stack Developer</span>
            </h2>
          </div>
          
          <div className='animate-fadeIn' style={{animationDelay: '0.5s'}}>
            <p className='text-gray-400 py-4 max-w-md'>
              I have 2 years of experience in designing and developing web applications.
              Currently, I love to work on web applications using technologies like 
              <span className='text-blue-400'> React</span>, 
              <span className='text-blue-400'> MongoDB</span>, and
              <span className='text-blue-400'> Tailwind CSS</span>.
            </p>
          </div>
           
          <div className='animate-slideRight' style={{animationDelay: '0.8s'}}>
            <Link to="contact" smooth duration={500}>
              <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-700 cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-blue-500/20'>
                Hire me
                <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0 animate-fadeIn md:ml-8" style={{animationDelay: '0.3s'}}>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 opacity-70 blur-md animate-pulse"></div>
          <img 
            className='relative rounded-full mx-auto h-96 w-96 md:w-full object-cover z-10 shadow-xl border-4 border-blue-400 hover:scale-105 transition-transform duration-300' 
            src={HeroImage} 
            alt="my profile" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;