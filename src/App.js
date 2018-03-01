import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import {Grid, Col, Row} from 'react-bootstrap'

import Books from './Components/Books'

class App extends Component {
  constructor(){
      super();
      this.state = {
          books: [],
          text: 'Harry Potter'
      }
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <Grid>
              <Row>
                  <Col xs={12} md={12} lg={12}>
                      <Books/>
                  </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
