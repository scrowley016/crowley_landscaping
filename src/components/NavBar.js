import React from 'react'
import {Nav, NavDropdown} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

const NavBar=()=>{
    return(
  
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="/home" >
        <img src="./pictures/logoNoB.png"
        width="100"
        height="100"
        className="d-inline-block align-top"/>
     </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      {/* <Nav.Link href="/about">About Us</Nav.Link> */}
      <Nav.Link href="/services">What We Offer</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


    )
}
export default NavBar