import React, { useState } from 'react';
import TurfImage from '../assets/turf.png';
import DashboardImage from '../assets/social.png';
import EventImage from '../assets/event-proj.jpg';
import TextileImage from '../assets/textile.png'; // Add this image to your assets folder

function Project() {
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Turf Booking System',
      image: TurfImage,
      tech: 'ReactJS, TailwindCSS, ExpressJS, MongoDB',
      description:
        'Real-time turf booking platform with secure payments and automated slot confirmations. Reduced booking errors by 30%.',
      codeLink: 'https://ground-booking.netlify.app',
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
    {
      id: 4,
      title: 'Textile Management System',
      image: TextileImage,
      tech: 'ReactJS, NodeJS, ExpressJS, MongoDB',
      description:
        'Inventory and order management tool for textile businesses. Built with MERN stack to streamline internal operations and order tracking.',
      codeLink: 'https://kumartextiles.vercel.app',
    },
  ];

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div name="project" className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</h2>
          <p className="py-6">A showcase of some work I've built:</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(({ id, title, image, tech, description, codeLink }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105"
            >
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-400 italic">{tech}</p>
                <button
                  onClick={() => toggleExpand(id)}
                  className="mt-4 text-blue-400 hover:underline focus:outline-none"
                >
                  {expanded === id ? 'Hide Details' : 'More Details'}
                </button>
                {expanded === id && (
                  <div className="mt-4 text-sm text-gray-300 transition-all duration-300">
                    <p className="mb-2">{description}</p>
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      View Code or Live App
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
