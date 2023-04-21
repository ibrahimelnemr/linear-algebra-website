import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

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

<a className="pdf-link btn btn-dark" href={Exam2Fall2017} target="_blank" rel="noreferrer">Exam2Fall2017</a>
<a className="pdf-link btn btn-dark" href={Exam2Fall2018} target="_blank" rel="noreferrer">Exam2Fall2018</a>
<a className="pdf-link btn btn-dark" href={Exam2Fall2019} target="_blank" rel="noreferrer">Exam2Fall2019</a>
<a className="pdf-link btn btn-dark" href={Exam2Fall2020V4} target="_blank" rel="noreferrer">Exam2Fall2020V4</a>
<a className="pdf-link btn btn-dark" href={Exam2Fall2022} target="_blank" rel="noreferrer">Exam2Fall2022</a>
<a className="pdf-link btn btn-dark" href={Exam2Spring2017} target="_blank" rel="noreferrer">Exam2Spring2017</a>
<a className="pdf-link btn btn-dark" href={Exam2Spring2019} target="_blank" rel="noreferrer">Exam2Spring2019</a>
<a className="pdf-link btn btn-dark" href={Exam2Spring2021} target="_blank" rel="noreferrer">Exam2Spring2021</a>
<a className="pdf-link btn btn-dark" href={Problem1_2nd_method} target="_blank" rel="noreferrer">Problem1_2nd_method</a>
<a className="pdf-link btn btn-dark" href={SOLExam2Fall2018} target="_blank" rel="noreferrer">SOLExam2Fall2018</a>
<a className="pdf-link btn btn-dark" href={SOLExam2Fall2019} target="_blank" rel="noreferrer">SOLExam2Fall2019</a>
<a className="pdf-link btn btn-dark" href={SOLExam2Fall2020} target="_blank" rel="noreferrer">SOLExam2Fall2020</a>
<a className="pdf-link btn btn-dark" href={SOLExam2Fall2022} target="_blank" rel="noreferrer">SOLExam2Fall2022</a>
<a className="pdf-link btn btn-dark" href={SOLExam2Spring2019} target="_blank" rel="noreferrer">SOLExam2Spring2019</a>
<a className="pdf-link btn btn-dark" href={SOLExam2Spring2021} target="_blank" rel="noreferrer">SOLExam2Spring2021</a>
<a className="pdf-link btn btn-dark" href={SOLExam2Spring2022} target="_blank" rel="noreferrer">SOLExam2Spring2022</a>
<a className="pdf-link btn btn-dark" href={SOLExam2Summer2022} target="_blank" rel="noreferrer">SOLExam2Summer2022</a>


</>
    );
}

export default PastExams2;