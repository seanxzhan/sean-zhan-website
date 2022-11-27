import '../Main.scss'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About'
import Publications from '../components/Publications';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <About />
      <Publications />
      <Experience />
      <Projects />
    </div>
  )

}

export default Home;
