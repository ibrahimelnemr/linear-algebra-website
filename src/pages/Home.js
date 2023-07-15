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
import EslamPic from "../assets/eslam.jpeg";

import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
return (
<>

  <h1>
    Linear Algebra Notes
  </h1>
        
  <div className="row justify-content-center m-5">
    <img src={EslamPic} className="test-img profile-img" alt="logo" />
  </div>

  <div id="about">
    <h1>About Dr. Eslam</h1><br/>

    Eslam Badr earned his PhD from Universitat Autonoma de Barcelona (UAB) in Spain before joining the AUC. His area of expertise is within algebraic geometry and arithmetic. More specifically, his research mainly deals with explicit geometric and arithmetic properties of smooth plane curves/hypersurfaces and their moduli spaces. Topics including but not limited to: automorphism groups, twisting theory, fields of definition versus the field of moduli, quadratic points and geometric progression sequences.  

    <br/>
    <br/>

    Badr is interested in teaching several mathematics courses including, Algebra and Mathematical Logic, Differential and Integral Calculus, Linear and Abstract Algebra, Ordinary Differential Equations, Galois Theory, Number Theory and, Arithmetic geometry.

    <br/>
    <br/>

  </div>

  <div id="course-details">

    <h1>About the course</h1>

    <br/>

    <div class="row justify-content-center text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    </div>
    <br/>
    <br/>
  </div>

</>
    );
  };

export default Home;