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
  Home,
  Syllabus,
  Notes,
  PastExams,
  PastExams1,
  PastExams2,
  PastExamsFinal
} from "./pages";

import { Container, Row, Col } from 'react-bootstrap';

/**React Router */

import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className="main container-fluid">
      <Row>
        <TopNavBar/>
      </Row>
  
    <Routes>
    <Route path='/' element={ <Home/> } />
    
    <Route path='/syllabus' element={ <Syllabus/> } />
    <Route path='/notes' element={ <Notes/> } />

    <Route path='/pastexams1' element={ <PastExams1/> } />

    <Route path='/pastexams2' element={ <PastExams2/> } />

    <Route path='/pastexamsfinal' element={ <PastExamsFinal /> } />

  </Routes>
      
  <Footer/>
    
  </div>
  );
}

export default App;