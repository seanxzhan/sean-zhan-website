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
    <SidebarContainer isOpen={isOpen} onClick={toggle} color='#304856'>
      <Icon onClick={toggle}>
        <CloseIcon color='#d4ac2a'>
          <FaTimes />
        </CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle} smooth={true} 
                       duration={500} spy={true} exact='true' offset={-80}
                       color='#d4ac2a' >
            About
          </SidebarLink>
          <SidebarLink to='experience' onClick={toggle} smooth={true}
                       duration={500} spy={true} exact='true' offset={-80}
                       color='#d4ac2a' >
            Experience
          </SidebarLink>
          <SidebarLink to='publications' onClick={toggle} smooth={true}
                       duration={500} spy={true} exact='true' offset={-80}
                       color='#d4ac2a' >
            Publications
          </SidebarLink>
          {/* <SidebarLink to='projects' onClick={toggle} smooth={true}
                       duration={500} spy={true} exact='true' offset={-80}
                       color='#d4ac2a'>
            Projects
          </SidebarLink> */}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
