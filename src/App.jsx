import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Components/Home/Home';
import ChipsetBuilder from './Components/ChipsetBuilder/ChipsetBuilder';

class App extends Component {

  render() {
    return (
      <Router>
        <Container fluid={true} className="p-0">
        <Route exact path="/" component={Home} />
        <Route path="/chipsetBuilder" component={ChipsetBuilder} />
        </Container>
      </Router>
    );
  }
}

export default App;