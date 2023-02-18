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

import Exam2Fall2017 from "../assets/Past Exams 2/Exam2Fall2017.pdf";
import Exam2Fall2018 from "../assets/Past Exams 2/Exam2Fall2018.pdf";
import Exam2Fall2019 from "../assets/Past Exams 2/Exam2Fall2019.pdf";
import Exam2Fall2020V4 from "../assets/Past Exams 2/Exam2Fall2020V4.pdf";
import Exam2Fall2022 from "../assets/Past Exams 2/Exam2Fall2022.pdf";
import Exam2Spring2017 from "../assets/Past Exams 2/Exam2Spring2017.pdf";
import Exam2Spring2019 from "../assets/Past Exams 2/Exam2Spring2019.pdf";
import Exam2Spring2021 from "../assets/Past Exams 2/Exam2Spring2021.pdf";
import Problem1_2nd_method from "../assets/Past Exams 2/Problem1_2nd_method.pdf";
import SOLExam2Fall2018 from "../assets/Past Exams 2/SOLExam2Fall2018.pdf";
import SOLExam2Fall2019 from "../assets/Past Exams 2/SOLExam2Fall2019.pdf";
import SOLExam2Fall2020 from "../assets/Past Exams 2/SOLExam2Fall2020.pdf";
import SOLExam2Fall2022 from "../assets/Past Exams 2/SOLExam2Fall2022.pdf";
import SOLExam2Spring2019 from "../assets/Past Exams 2/SOLExam2Spring2019.pdf";
import SOLExam2Spring2021 from "../assets/Past Exams 2/SOLExam2Spring2021.pdf";
import SOLExam2Spring2022 from "../assets/Past Exams 2/SOLExam2Spring2022.pdf";
import SOLExam2Summer2022 from "../assets/Past Exams 2/SOLExam2Summer2022.pdf";

const PastExams2 = () => {
    return(
<>
    <h1>Past Exams2</h1>
    <a className="text-secondary" href={Exam2Fall2017} target="_blank" rel="noreferrer"><h1>Exam2Fall2017</h1></a>
<a className="text-secondary" href={Exam2Fall2018} target="_blank" rel="noreferrer"><h1>Exam2Fall2018</h1></a>
<a className="text-secondary" href={Exam2Fall2019} target="_blank" rel="noreferrer"><h1>Exam2Fall2019</h1></a>
<a className="text-secondary" href={Exam2Fall2020V4} target="_blank" rel="noreferrer"><h1>Exam2Fall2020V4</h1></a>
<a className="text-secondary" href={Exam2Fall2022} target="_blank" rel="noreferrer"><h1>Exam2Fall2022</h1></a>
<a className="text-secondary" href={Exam2Spring2017} target="_blank" rel="noreferrer"><h1>Exam2Spring2017</h1></a>
<a className="text-secondary" href={Exam2Spring2019} target="_blank" rel="noreferrer"><h1>Exam2Spring2019</h1></a>
<a className="text-secondary" href={Exam2Spring2021} target="_blank" rel="noreferrer"><h1>Exam2Spring2021</h1></a>
<a className="text-secondary" href={Problem1_2nd_method} target="_blank" rel="noreferrer"><h1>Problem1_2nd_method</h1></a>
<a className="text-secondary" href={SOLExam2Fall2018} target="_blank" rel="noreferrer"><h1>SOLExam2Fall2018</h1></a>
<a className="text-secondary" href={SOLExam2Fall2019} target="_blank" rel="noreferrer"><h1>SOLExam2Fall2019</h1></a>
<a className="text-secondary" href={SOLExam2Fall2020} target="_blank" rel="noreferrer"><h1>SOLExam2Fall2020</h1></a>
<a className="text-secondary" href={SOLExam2Fall2022} target="_blank" rel="noreferrer"><h1>SOLExam2Fall2022</h1></a>
<a className="text-secondary" href={SOLExam2Spring2019} target="_blank" rel="noreferrer"><h1>SOLExam2Spring2019</h1></a>
<a className="text-secondary" href={SOLExam2Spring2021} target="_blank" rel="noreferrer"><h1>SOLExam2Spring2021</h1></a>
<a className="text-secondary" href={SOLExam2Spring2022} target="_blank" rel="noreferrer"><h1>SOLExam2Spring2022</h1></a>
<a className="text-secondary" href={SOLExam2Summer2022} target="_blank" rel="noreferrer"><h1>SOLExam2Summer2022</h1></a>

</>
    );
}

export default PastExams2;