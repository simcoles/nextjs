import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Link from 'next/link';

const BsNavLink = ({ href, title }) => (
  <NavItem className="port-navbar-item">
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  </NavItem>
);

const BsNavbarBrand = ({ href, title }) => (
  <Link href={href}>
    <a className="navbar-brand port-navbar-brand">{title}</a>
  </Link>
);

const LoginLink = () => (
  <NavItem className="port-navbar-item">
    <span className="nav-link port-navbar-link clickable">Login</span>
  </NavItem>
);

const LogoutLink = () => (
  <NavItem className="port-navbar-item">
    <span className="nav-link port-navbar-link clickable">Logout</span>
  </NavItem>
);

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md"
      >
        <BsNavbarBrand title="Simeon Coles" href="/" />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <BsNavLink href="/" title="Home" />
            <BsNavLink href="/about" title="About" />
            <BsNavLink href="/portfolios" title="Portfolios" />
            <BsNavLink href="/blogs" title="Blogs" />
            <BsNavLink href="/cv" title="CV" />
          </Nav>
          <Nav navbar>
            <LoginLink />
            <LogoutLink />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
