import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { selectToken } from "../store/user/selectors";
import { useSelector } from "react-redux";

export default function Navigation() {
  const token = useSelector(selectToken);
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link exact as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/posts">
            Posts
          </Nav.Link>
          <Nav.Link as={NavLink} to="/developers">
            Developers
          </Nav.Link>
          {token === null ? <Nav.Link as={NavLink} to="/signup">
            Sign up
          </Nav.Link> : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
