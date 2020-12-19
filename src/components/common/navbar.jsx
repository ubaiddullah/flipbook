import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={NavLink} exact to="/">
          FlipBook Generator
          {/* <img
            src="/img/logo.png"
            alt="Fipbook Logo"
            height="120px"
            width="150px"
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} exact to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/books">
              Books
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
