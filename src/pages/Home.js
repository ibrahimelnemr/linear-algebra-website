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

const Home = () => {
    return (
      <>
  
      <h1>Eslam Badr's Linear Algebra Notes</h1>
      
      <div className="row justify-content-center m-5">
        <Image/>
      </div>
      
      <h1>Syllabus</h1>
      
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
    </>
    );
  };
    
export default Home;