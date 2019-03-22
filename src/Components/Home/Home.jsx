import React,{ Component } from 'react';
import './Home.css';
import { Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom";

class Home extends Component {

  render() {
    return(
      <div>
        <Row className="d-flex justify-content-center align-items-center home-page">
          <Col md={12}>
            <h3 className="text-home">Create your poker chipset in minutes for your future game.</h3>
          </Col>
          <Col tag="div" md={12}>
            <Link tag="a" to="/chipsetBuilder">
              <Button className="btn-start" outline color="warning">Get Started</Button>
            </Link>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12}>
            <img className="image-background" src={process.env.PUBLIC_URL+'/assets/images/poker.jpg'} alt="Quinte Poker"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;