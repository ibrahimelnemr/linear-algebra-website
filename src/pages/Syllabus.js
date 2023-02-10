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

import { Container, Row, Col } from 'react-bootstrap';

const Syllabus = () => {
    return(
<>
      
    <h1>Syllabus</h1>
      
      <EmbedPDF pdfsource="/pdf.pdf"/>
</>
    );
}

export default Syllabus;