import React from 'react';
import { FaCertificate, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "MongoDB Node.js Developer Path",
      organization: "MongoDB, Inc.",
      date: "February 08, 2025",
      icon: <SiMongodb className="text-green-500" size={30} />,
      description: "Certified MongoDB Associate Developer with expertise in Node.js integration and database management.",
      credentialId: "MDBsmsu7tih4y",
      pdfLink: "https://drive.google.com/file/d/12_qnNCySTsK4JoICvRJlo8Z7wlstQ1rB/view?usp=drive_link" // Link to MongoDB certificate PDF
    }
  ];

  return (
    <div name="certificates" className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen py-16">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8 animate-fadeIn">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 text-white">
            Certification
          </p>
          <p className="py-6 text-gray-300">Professional qualification</p>
        </div>

        <div className="grid grid-cols-1 gap-8 animate-slideUp">
          {certificates.map(({ id, title, organization, date, icon, description, credentialId, pdfLink }) => (
            <a 
              key={id}
              href={pdfLink}
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-blue-400/20 hover:transform hover:scale-[1.01] cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-full">
                    {icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                      <FaExternalLinkAlt className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-blue-400 font-medium">{organization}</p>
                    <div className="flex items-center mt-2 text-gray-400 text-sm">
                      <FaCertificate className="mr-2" />
                      <span>Credential ID: {credentialId}</span>
                    </div>
                    <div className="flex items-center mt-1 text-gray-400 text-sm">
                      <FaAward className="mr-2" />
                      <span>Issued: {date}</span>
                    </div>
                    <p className="mt-4 text-gray-300">{description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;