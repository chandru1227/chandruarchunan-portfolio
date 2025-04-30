import React, { useState } from 'react';
import TurfImage from '../assets/turf.png';
import DashboardImage from '../assets/social.png';
import EventImage from '../assets/event-proj.jpg';

function Project() {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Turf Booking System',
      image: TurfImage,
      tech: 'ReactJS, TailwindCSS, ExpressJS, MongoDB',
      description:
        'Real-time turf booking platform with secure payments and automated slot confirmations. Reduced booking errors by 30%.',
      codeLink: 'https://github.com/chandru1227/Turf-Booking-Application.git',
    },
    {
      id: 2,
      title: 'Social Media Analytics Dashboard',
      image: DashboardImage,
      tech: 'ReactJS, TailwindCSS, Flask, Firebase, Google API, BERT',
      description:
        'YouTube video metrics dashboard with BERT-based sentiment analysis (85% accuracy) and Firebase backend.',
      codeLink: 'https://github.com/chandru1227/social-backend.git',
    },
    {
      id: 3,
      title: 'Event Management System',
      image: EventImage,
      tech: 'HTML, CSS, ExpressJS, PostgreSQL',
      description:
        'Full-stack event management system with CRUD for attendees and event coordination, optimized for performance.',
      codeLink: 'https://github.com/Arun-Karthik-26/Event_Management_System.git',
    },
  ];

  return (
    <div name="project" className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen py-16">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-12">
          <h2 className="text-4xl font-bold inline border-b-4 border-blue-500 text-white">Projects</h2>
          <p className="py-6 text-gray-300">Check out some of my recent works</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, image, tech, description, codeLink }) => (
            <div 
              key={id} 
              className="relative bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-blue-400/20 hover:shadow-lg group"
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={image} 
                  alt={title} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredId === id ? 'scale-110' : ''}`}
                />
              </div>
              
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-70"></div>
              
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-blue-400 font-medium mb-3">{tech}</p>
                <p className="text-gray-300 text-sm mb-4">{description}</p>
                
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-blue-400 rounded-md hover:from-blue-900 hover:to-gray-800 transition-colors duration-300 text-sm font-medium"
                >
                  View Code <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;