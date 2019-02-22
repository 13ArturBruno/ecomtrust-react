import React, { Component } from 'react';
import logo from '../assets/logotitle.png';
import Button from './Button';
import './Home.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  submit(){

  }

  render() {
    return (
      <div className="container">
            <div className="panel">
              <img src={logo} width="50%" height="50%" alt=""/>
              <Button value="CLICK" onclick="submit()" />
            </div>
      </div>
    );
  }
}

