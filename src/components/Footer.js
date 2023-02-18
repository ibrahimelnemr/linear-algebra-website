import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Footer() {
    return(
    <>
    {/* <Navbar className ="column justify-content-end">
        <Nav className="">

            <Link className="nav-link nav-item" to="/">Home </Link>
            
            <Link className="nav-link nav-item" to="/notes">Notes</Link>

            <Link className="nav-link nav-item" to="/syllabus">Syllabus </Link>
            
            <Link className="nav-link nav-item" to="/pastexams1">Past Exams 1 </Link>
            
            <Link className="nav-link nav-item" to="/pastexams2">Past Exams 2 </Link>

            <Link className="nav-link nav-item" to="/pastexamsfinal">Past Exams Final </Link>
            
      </Nav>
      </Navbar> */}
    
        <div className="bg-light d-flex justify-content-center footer" >
        © 2023 Eslam Badr
        </div>
        </>
    );
}

export default Footer
