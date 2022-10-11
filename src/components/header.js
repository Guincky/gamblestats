import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.index.css';


function Header() {
    return (
        <Navbar bg="light" expand="lg" className="nav-bar">
          <Container>
            <Navbar.Brand href="/">Painel Tips</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/painel_tips">Jogos de Hoje</Nav.Link>
                <Nav.Link href="/jogos_amanha">Jogos de Amanha</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

    export default Header;
    