import '../Main.scss'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import About from '../components/About'
import Publications from '../components/Publications';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

import {
  homeObjOne,
} from '../components/About/Data';

import {
  pub1,
} from '../components/Publications/Data';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <About {...homeObjOne} />
      <Experience />
      <Publications {...pub1} />
      {/* <Projects /> */}
    </div>
  )

}

export default Home;
