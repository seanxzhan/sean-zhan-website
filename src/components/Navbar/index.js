import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaUserGraduate,
  FaFile,
  FaFileAlt
} from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavIcons,
  NavIcon
} from './NavElements';
import Resume from '../../pdfs/resume.pdf';

const openLink = (which) => {
  const github = "https://github.com/seanxzhan";
  const linkedin = "https://www.linkedin.com/in/sean-zhan/";
  const instagram = "https://www.instagram.com/sean.takes.shots/";
  const scholar = "https://scholar.google.com/citations?user=gG5iL0QAAAAJ&hl=en";
  const resume = Resume;


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
    case "scholar":
      toOpen = scholar;
      break;
    case "resume":
      toOpen = resume;
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
    <Nav color='#304856'>
      <NavbarContainer>
        <NavIcons>
          <NavIcon color='#d4ac2a'>
            <FaGithub onClick={() => openLink("github")} />
          </NavIcon>
          <NavIcon color='#d4ac2a'>
            <FaLinkedin onClick={() => openLink("linkedin")} />
          </NavIcon>
          <NavIcon color='#d4ac2a'>
            <FaUserGraduate onClick={() => openLink("scholar")} />
          </NavIcon>
          <NavIcon color='#d4ac2a'>
            <FaFileAlt onClick={() => openLink("resume")} />
          </NavIcon>
          {/* <NavIcon color='#d4ac2a'>
            <FaInstagram onClick={() => openLink("instagram")} />
          </NavIcon> */}
        </NavIcons>
        <NavMenu>
          <NavItem>
            <NavLink to='about' smooth={true} duration={500} spy={true}
              exact='true' offset={-80} color='#d4ac2a'>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='experience' smooth={true} duration={500} spy={true}
              exact='true' offset={-80} color='#d4ac2a'>
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='publications' smooth={true} duration={500} spy={true}
              exact='true' offset={-80} color='#d4ac2a'>
              Publications
            </NavLink>
          </NavItem>
          {/* <NavItem>
          <NavLink to='projects' smooth={true} duration={500} spy={true}
                   exact='true' offset={-80} color='#d4ac2a'>
            Projects
          </NavLink>
        </NavItem> */}
        </NavMenu>
        <MobileIcon onClick={toggle} color='#d4ac2a'>
          <FaBars />
        </MobileIcon>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
