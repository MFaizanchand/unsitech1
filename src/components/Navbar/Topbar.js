import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Twitter from '../../images/twitter.png'
import FaceBook from '../../images/facebook-app-symbol.png'
import LinkedIn from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png'
import Image from 'react-bootstrap/Image';
function Topbar() {
  return (
    <div>
       <Navbar style={{height:'32px'}} collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">UNSII TECH</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          
          </Nav>
          <Nav style={{display:'flex' , justifyContent:'space-between' , marginLeft:12
          }} >
            <Image src={Twitter} style={{height:15 , marginLeft:20}} />
            <Image src={FaceBook} style={{height:15 , marginLeft:20}} />
            <Image src={Instagram} style={{height:15 , marginLeft:20}} />
            <Image src={LinkedIn} style={{height:15 , marginLeft:20}} />

            
           </Nav>
           <Nav><Nav.Link style={{ backgroundColor: 'blue',  color:'white' , borderRadius:10, marginLeft:'20px'  , fontWeight:'bold' , fontSize:'10px' }}href="#features">Log In</Nav.Link></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Topbar
