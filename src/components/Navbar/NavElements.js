import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ color }) => ( color )};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    margin-top: -40px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 2rem;
    color: #ecede7;
  }

  &:hover {
    color: ${({ color }) => ( color )};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  // margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: #ecede7;
  font-size: 1.2em;

  &:hover {
    color: ${({ color }) => ( color )};
  }

  &.active {
    transition: 0.4s all ease;
    color: ${({ color }) => ( color )};
  }
`;

export const NavIcons = styled.div`
  gap: 1.5em;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const NavIcon = styled.div`
  font-size: 2em;
  color: #ecede7;

  &:hover {
    color: ${({ color }) => ( color )};
  }
`;
