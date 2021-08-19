import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import CongressImg from "../../assets/c_logo.png";

import "./index.scss";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="dark"
      fixed="top"
      className="main-header"
    >
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center">
          <img
            alt="congress-logo"
            src={CongressImg}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <div className="custom-nav-brand">
            <div className="custom-nav-brand-heading">Dr. Shashi Tharoor</div>
            <div className="custom-nav-brand-sub-heading">
              MP Thiruvananthapuram & Author
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={2}>About</Nav.Link>
            <Nav.Link eventKey={3}>In Parliament</Nav.Link>
            <Nav.Link eventKey={6}>CTF</Nav.Link>
            <Button variant="outline-info" className="rounded-0 border-2">
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
