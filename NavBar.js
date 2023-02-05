import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

export default function NavBar() {
  return (
    
      <Navbar expand="lg" variant="light" bg="info" className="text-light">
      <Container>
        <Navbar.Brand >Cerficate Generator </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to='/about'><Nav.Link>About</Nav.Link></LinkContainer>

            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}
