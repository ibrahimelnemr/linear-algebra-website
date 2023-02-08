import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

function TopNavBar() {
    return(
        <>
        <div className="bg-light">
        <Navbar className ="column justify-content-end">
        <Nav className="">
            
            <Nav.Link href="#syllabus" className="nav-item">Syllabus</Nav.Link>
            
            <Nav.Link href="/chapters" className="nav-item">Chapters</Nav.Link>

            <Nav.Link href="/home" className="nav-item">Home</Nav.Link>

      </Nav>
      </Navbar>
      </div>
      
      </>
    );
}

export default TopNavBar
