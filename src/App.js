import React, { Component } from 'react';

// Styles
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

// Landing Page
import Landing from './landing/landing.js';

// Calculator
import Calculator from './calculator/calculator.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { logged: false }
  }

  componentDidMount() {
    M.AutoInit();
    this.checkToken();
  }

  checkToken() {
    if(localStorage.getItem('token'))
      this.setState({ logged: true });
  }

  render() {
    return( this.state.logged ? <Calculator /> : <Landing /> );
  }
}

