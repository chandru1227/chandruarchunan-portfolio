import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Social from './components/Social';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Helmet>
        <title>Chandru</title>
        <meta name="description" content="Chandru's portfolio website" />
      </Helmet>
      
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Certificates />
      <Contact />
      
      <Social />
    </div>
  );
}

export default App;
