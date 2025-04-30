import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Social from './components/Social';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Certificates from './components/Certificates'; // Import new component
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Certificates /> {/* Add new component */}
      <Contact />
      
      <Social />
    </div>
  );
}

export default App;