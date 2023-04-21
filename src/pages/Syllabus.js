import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import SyllabusSpring23 from '../assets/Syllabus Spring 23.pdf'


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