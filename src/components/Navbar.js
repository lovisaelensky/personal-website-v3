import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  height: 10vw;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 20px 0;
  font-family: 'roboto mono', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  color: #72eeda;
  transition: all 0.1s ease;
  text-decoration: none;
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <NavWrapper>
      <NavLink to="/#">01. About</NavLink>
      <NavLink to="/projects">02. Projects</NavLink>
      <NavLink to="/contact">03. Contact</NavLink>
    </NavWrapper>
  );
}
