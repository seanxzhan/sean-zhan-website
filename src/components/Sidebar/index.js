import React from 'react';
import { FaTimes } from 'react-icons/fa';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} color='#2c3e4a'>
      <Icon onClick={toggle}>
        <CloseIcon color='#a9c2d1'>
          <FaTimes />
        </CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle} smooth={true} 
                       duration={500} spy={true} exact='true' offset={-80}
                       color='#a9c2d1' >
            About
          </SidebarLink>
          <SidebarLink to='experience' onClick={toggle} smooth={true}
                       duration={500} spy={true} exact='true' offset={-80}
                       color='#a9c2d1' >
            Experience
          </SidebarLink>
          <SidebarLink to='publications' onClick={toggle} smooth={true}
                       duration={500} spy={true} exact='true' offset={-80}
                       color='#a9c2d1' >
            Publications
          </SidebarLink>
          {/* <SidebarLink to='projects' onClick={toggle} smooth={true}
                       duration={500} spy={true} exact='true' offset={-80}
                       color='#a9c2d1'>
            Projects
          </SidebarLink> */}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
