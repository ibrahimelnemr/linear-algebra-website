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
import DiscretePDF from "../assets/Discrete Syllabus.pdf"
import Notes1 from "../assets/Notes/1.1 1.2.pdf"
import Notes2 from "../assets/Notes/2.1 2.2.pdf"

import { Container, Row, Col } from 'react-bootstrap';

const Notes = () => {
    return(
<>
    <a className="text-secondary" href={Notes1} target="_blank" rel="noreferrer">
        <h1>Notes on 1.1 & 1.2</h1>
    </a>
        <iframe target="_parent" src={Notes1} className="pdf"></iframe>

    <a className="text-secondary" href={Notes2} target="_blank" rel="noreferrer">
        <h1>Notes on 2.1 & 2.2</h1>
    </a>
        <iframe src={Notes2} className="pdf"></iframe>

</>
    );
}

export default Notes;