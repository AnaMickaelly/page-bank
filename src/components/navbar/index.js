import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './navbarElements';

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">page-bank</NavLogo>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
