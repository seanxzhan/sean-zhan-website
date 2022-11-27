import styled from 'styled-components';
import { Link } from 'react-scroll';

// export const NavItem = styled.li`
//   height: 80px;
// `;

export const NavLink = styled(Link)`
  font-size: 1.3em;
  border-bottom: 1px solid transparent;
  margin: 1em;
  cursor: pointer;

  @media screen and (max-width: 850px) {
      display: none;
  }
`;