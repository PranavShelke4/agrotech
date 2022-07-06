import React from "react";
import "./navbar.css"
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function navbar() {
  return (
    <>
      <Navbar bg="none" id = "navBar" expand="lg">
        <Container >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../../assets/images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id= "nav1" href="#home">Home</Nav.Link>
              <Nav.Link id="navLink" href="#link">Products</Nav.Link>
              <Nav.Link id="navLink3" href="#link" disabled>
                Visitors
              </Nav.Link>
              <Nav.Link id="navLink" href="#link">Contect us</Nav.Link>
              <Button id="navLink2" variant="outline-light">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
