import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import sql from '../assets/sql-database-generic.svg';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import mongoDB from '../assets/mongodb.webp';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Experience() {
  const tech = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-500',
    },
    {
      id: 6,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-500',
    },
    {
      id: 7,
      src: sql,
      title: 'SQL',
      style: 'shadow-sky-500',
    },
    {
      id: 8,
      src: mongoDB,
      title: 'MongoDB',
      style: 'shadow-green-500',
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-16">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-12">
          <p className="text-4xl font-bold border-b-4 border-blue-500 p-2 inline">Experience</p>
          <p className="py-6 text-gray-300">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {tech.map(({ id, src, title, style }) => (
            <div 
              key={id} 
              className={`bg-gray-900 rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 hover:shadow-lg duration-500 ${style}`}
            >
              <img src={src} alt={title} className="w-16 md:w-20 mx-auto filter drop-shadow-lg" />
              <p className="mt-4 text-gray-300 font-medium">{title}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Internship Experience</h3>
          <a 
            href="https://drive.google.com/file/d/1qJy5ulJvZUDv_DemDU9SMr8sPA9iCTB0/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row gap-4 hover:bg-gray-800/50 p-3 rounded-lg transition-colors duration-300 group"
          >
            <div className="md:w-1/4">
              <span className="text-sm text-gray-400">Jun - Oct 2024</span>
            </div>
            <div className="md:w-3/4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold mb-2">AI/ML Intern</h4>
                <FaExternalLinkAlt className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-gray-300">GenerativeAI Consortium & SystimaNx Pvt Ltd</p>
              <p className="text-gray-400 mt-2">
                Predicted various employee attrition patterns using machine learning algorithms.
                Worked on data analysis and model optimization to improve prediction accuracy.
              </p>
              <div className="mt-2 inline-block text-sm text-blue-400">
                <span className="border-b border-blue-400 pb-0.5">View Certificate</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;