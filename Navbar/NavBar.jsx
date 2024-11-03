import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
const NavBar = () => {
  return (
    <>
 <Navbar expand="lg" className="bg-body-tertiary ">
      <Container className='navBar'>
        <Navbar.Brand href="/Home" className='logo'><img src="images\Artboard 5 copy 2.png" alt="logo" style={{width:"200px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-menu-small'/>
        <Navbar.Collapse id="basic-navbar-nav" className='nav-menu' >
          <Nav className="me-auto">
            <Nav.Link href="/Home" className='navLinks'>الرئيسية</Nav.Link>
            <Nav.Link href="/About" className='navLinks'>عن الشركة</Nav.Link>
            <Nav.Link href="/Services" className='navLinks'>خدمات</Nav.Link>
            <Nav.Link href="/Quality" className='navLinks'>الجودة</Nav.Link>
            <Nav.Link href="/Contact" className='navLinks'>تواصل معنا</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
        <div className='lang'>AR</div>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar