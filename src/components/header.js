import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.index.css';


function Header() {
    return (
        <Navbar bg="light" expand="lg" className="nav-bar">
          <Container>
            <Navbar.Brand href="/">GAMBLESTATS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

    export default Header;
    
