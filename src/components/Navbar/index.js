import './Navbar.scss'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// import { animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import {
  NavItem,
  NavLink
} from './NavElements';

const navStyle = {
  fontSize: '1.3em'
}

const openLink = (which) => {
  const github = "https://github.com/seanzhan0319";
  const linkedin = "https://www.linkedin.com/in/sean-zhan/";
  const instagram = "https://www.instagram.com/sean.takes.shots/";

  var toOpen;
  switch (which) {
      case "github":
          toOpen = github;
          break;
      case "linkedin":
          toOpen = linkedin;
          break;
      case "instagram":
          toOpen = instagram;
          break;
      default:
          break;
  };

  window.open(
    toOpen, "_blank"
  )
};

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <nav scrollNav={scrollNav}>
      <icons>
        <icon>
          <FaGithub onClick={() => openLink("github")} />
        </icon>
        <icon>
          <FaLinkedin onClick={() => openLink("linkedin")} />
        </icon>
        <icon>
          <FaInstagram onClick={() => openLink("instagram")} />
        </icon>
      </icons>
      <options>
        {/* <NavItem> */}
          <Link
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}>
            About
          </Link>
        {/* </NavItem> */}
        {/* <NavItem>
          <NavLink
            to='publications'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}>
            Publications
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='experience'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}>
            Experience
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='project'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}>
            Project
          </NavLink>
        </NavItem> */}
      </options>
      <mobilebtn onClick={toggle}>
        <icon>
          <FaBars />
        </icon>
      </mobilebtn>
    </nav>
  )
}

export default Navbar;
