import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';


export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${({ color }) => ( color )};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 999;
`;

export const CloseIcon = styled.div`
  font-size: 1.2em;
  color: #ecede7;
  &:hover {
    color: ${({ color }) => ( color )};
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.8rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 90px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 90px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: ${({ color }) => ( color )};
    transition: 0.2s ease-in-out;
  }
`;
