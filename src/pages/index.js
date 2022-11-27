import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About'
import Publications from '../components/Publications';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <pagesWrapper>
      <Navbar toggle={toggle} />
      <About />
      <Publications />
    </pagesWrapper>
  )

}

export default Home;
