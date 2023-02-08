/** Default  Imports */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/** Other  Imports */
import {
  TopNavBar,
  EmbedPDF,
  Image,
  Main,
  Footer
} from "./components";

import {
  Chapters,
  Home
} from "./pages";

import { Container, Row, Col } from 'react-bootstrap';

/**React Router */

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { NavLink } from 'react-router-dom';

function App() {
  return (
    <>

{/* <Router>
    <Routes>
        <Route exact path='/chapters' element={<Chapters />} />
    </Routes>
</Router>
 */}

{/* <NavLink to="/chapters">
                Chapters Lnk
</NavLink> */}


  
    <div className="main container-fluid">
    <Row>
      <TopNavBar/>
    </Row>

    <h1>Eslam Badr's Linear Algebra Notes</h1>
    
    <div className="row justify-content-center m-5">
      <Image/>
    </div>
    
    <h1>Syllabus</h1>
    
    <EmbedPDF pdfsource="/pdf.pdf"/>
    
    <div className="row justify-content-center">
    <div className="col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    </div>
    <div class="col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    </div>
    <div class="col">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    </div>
  </div>
  <br/>
  <div class="row justify-content-center text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  </div>
  
  
  
  <Row>
    <Footer/>
  </Row>
  </div>
  
    </>
  );
}

export default App;
