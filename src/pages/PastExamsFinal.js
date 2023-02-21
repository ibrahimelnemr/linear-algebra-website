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
import FinalFall2018 from "../assets/Past Exams Final/FinalFall2018.pdf";
import FinalFall2019 from "../assets/Past Exams Final/FinalFall2019.pdf";
import FinalFall2022 from "../assets/Past Exams Final/FinalFall2022.pdf";
import FinalFall2022_2 from "../assets/Past Exams Final/FinalFall2022_2.pdf";
import FinalSpring2021 from "../assets/Past Exams Final/FinalSpring2021.pdf";
import FinalSpring2020 from "../assets/Past Exams Final/FinalSpring2020.pdf";
import FinalSummer2022 from "../assets/Past Exams Final/FinalSummer2022.pdf";
import SOLFinalFall2018 from "../assets/Past Exams Final/SOLFinalFall2018.pdf";
import SOLFinalFall2019 from "../assets/Past Exams Final/SOLFinalFall2019.pdf";
import SOLFinalFall2020 from "../assets/Past Exams Final/SOLFinalFall2020.pdf";
import SOLFinalFall2021 from "../assets/Past Exams Final/SOLFinalFall2021.pdf";
import SOLFinalSpring2020 from "../assets/Past Exams Final/SOLFinalSpring2020.pdf";
import SOLFinalSpring2021 from "../assets/Past Exams Final/SOLFinalSpring2021.pdf";
import SOLFinalSpring2022 from "../assets/Past Exams Final/SOLFinalSpring2022.pdf";
import SOLFinalSummer2022 from "../assets/Past Exams Final/SOLFinalSummer2022.pdf";

const PastExamsFinal = () => {
    return(
<>
      
<h1>Past Exams Final</h1>
    
<a className="pdf-link btn btn-dark" href={FinalFall2018} target="_blank" rel="noreferrer">FinalFall2018</a>
<a className="pdf-link btn btn-dark" href={FinalFall2019} target="_blank" rel="noreferrer">FinalFall2019</a>
<a className="pdf-link btn btn-dark" href={FinalFall2022} target="_blank" rel="noreferrer">FinalFall2022</a>
<a className="pdf-link btn btn-dark" href={FinalFall2022_2} target="_blank" rel="noreferrer">FinalFall2022_2</a>
<a className="pdf-link btn btn-dark" href={FinalSpring2021} target="_blank" rel="noreferrer">FinalSpring2021</a>
<a className="pdf-link btn btn-dark" href={FinalSpring2020} target="_blank" rel="noreferrer">FinalSpring2020</a>
<a className="pdf-link btn btn-dark" href={FinalSummer2022} target="_blank" rel="noreferrer">FinalSummer2022</a>
<a className="pdf-link btn btn-dark" href={SOLFinalFall2018} target="_blank" rel="noreferrer">SOLFinalFall2018</a>
<a className="pdf-link btn btn-dark" href={SOLFinalFall2019} target="_blank" rel="noreferrer">SOLFinalFall2019</a>
<a className="pdf-link btn btn-dark" href={SOLFinalFall2020} target="_blank" rel="noreferrer">SOLFinalFall2020</a>
<a className="pdf-link btn btn-dark" href={SOLFinalFall2021} target="_blank" rel="noreferrer">SOLFinalFall2021</a>
<a className="pdf-link btn btn-dark" href={SOLFinalSpring2020} target="_blank" rel="noreferrer">SOLFinalSpring2020</a>
<a className="pdf-link btn btn-dark" href={SOLFinalSpring2021} target="_blank" rel="noreferrer">SOLFinalSpring2021</a>
<a className="pdf-link btn btn-dark" href={SOLFinalSpring2022} target="_blank" rel="noreferrer">SOLFinalSpring2022</a>
<a className="pdf-link btn btn-dark" href={SOLFinalSummer2022} target="_blank" rel="noreferrer">SOLFinalSummer2022</a>


    </>
    
    );
}

export default PastExamsFinal;