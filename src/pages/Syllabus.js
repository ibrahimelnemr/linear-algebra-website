import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {
  TopNavBar,
  EmbedPDF,
  Image,
  Main,
  Footer
} from "../components";
import SyllabusSpring23 from '../assets/Syllabus Spring 23.pdf'


import { Container, Row, Col } from 'react-bootstrap';

const Syllabus = () => {
    return(
<>
      
    <h1>Syllabus</h1>
      
    <iframe src={SyllabusSpring23} className="pdf">
            
            </iframe>
</>
    );
}

export default Syllabus;