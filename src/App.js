import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import {Grid, Col, Row} from 'react-bootstrap'

import Books from './Components/Books'
import * as axios from "axios";

class App extends Component {
  constructor(){
      super();
      this.state = {
          books: [],
          text: 'Harry Potter'
      }
  }

  componentWillMount(){
      this.getBooks();
  }

  getBooks(){
      axios.request({
          method: 'get',
          url: 'https://www.googleapis.com/books/v1/volumes?q='+this.state.text
      }).then((response)=>{
          this.setState({books: response.data.items}, ()=>{
                  console.log("getBooks setState", this.state.books);
              });
      }).catch((error)=>{
          console.warn(error);
      });
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
