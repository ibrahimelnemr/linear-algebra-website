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
            
            <Nav.Link href="#syllabus">Syllabus</Nav.Link>
            
            <Nav.Link href="#chapters">Chapters</Nav.Link>

            <Nav.Link href="#exams">Past Exams</Nav.Link>

      </Nav>
      </Navbar>
      </div>
      
      </>
    );
}

export default TopNavBar
