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
  Home,
  Syllabus
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

    <Route path='/chapters' element={<Chapters /> } />
    <Route path='/' element={ <Home/> } />
    <Route path='/syllabus' element={ <Syllabus/> } />

  </Routes>

    
  </div>
  );
}

export default App;
