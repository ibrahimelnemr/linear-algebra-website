import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNavBar from './components/TopNavbar';
import Image from './components/Image';
import Main from './components/Main';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
    <div className="main container-fluid">
    <Row>
      <TopNavBar/>
    </Row>
    <Main/>
    
    <div className="row justify-content-center m-5">
      <Image/>
    </div>
    
    <div class="row justify-content-center">
    <div class="col">
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
  </div>
  
    </>
  );
}

export default App;
