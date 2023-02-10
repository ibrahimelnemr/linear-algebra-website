import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function TopNavBar() {
    return(
        <>
        <div className="bg-light">
        <Navbar className ="column justify-content-end">
        <Nav className="">

            <Link className="nav-link nav-item" to="/">Home </Link>
            
            <Link className="nav-link nav-item" to="/chapters">Chapters</Link>

            <Link className="nav-link nav-item" to="/syllabus">Syllabus </Link>
            
            {/* <Nav.Link href="/syllabus" className="nav-item">Syllabus</Nav.Link> */}
            
            {/* <Nav.Link href="/chapters" className="nav-item">Chapters</Nav.Link> */}

            {/* <Nav.Link href="/" className="nav-item">Home</Nav.Link> */}

      </Nav>
      </Navbar>
      </div>
      
      </>
    );
}

export default TopNavBar