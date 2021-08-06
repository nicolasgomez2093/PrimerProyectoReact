import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavReactB(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link onClick={() => props.setSection('Cards')}>Cards</Nav.Link>
      <Nav.Link onClick={() => props.setSection('Contador')}>Contador</Nav.Link>
      <Nav.Link onClick={() => props.setSection('Formulario')}>Formulario</Nav.Link>
      <Nav.Link onClick={() => props.setSection('Fotos')}>Fotos</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
      
        
    )
}

export default NavReactB
