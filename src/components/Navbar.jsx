import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "certificates", // Add new certificates link
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div 
      className={`flex justify-between items-center w-full h-20 px-6 text-white fixed z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-black"
      }`}
    >
      <div>
        <h1 className="text-4xl font-signature ml-2 text-blue-400">Chandru</h1>
      </div>

      <ul className="hidden md:flex gap-1">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-white relative group py-2"
          >
            <Link 
              to={link} 
              smooth 
              duration={500}
              className="transition-colors duration-300"
            >
              {link}
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 hover:text-white md:hidden transition-colors duration-300"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-40">
          <ul className="flex flex-col justify-center items-center h-screen gap-8">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize text-3xl text-gray-400 hover:text-white hover:scale-105 transition-all duration-300"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;