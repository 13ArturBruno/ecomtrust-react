import React, { Component } from "react";
import {Button, FormGroup, FormControl } from "react-bootstrap";
import "./css/Signin.css";
import logo from '../assets/logotitle.png';
import { Redirect } from 'react-router-dom'

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false,
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  submitSignin = () => {
    //condição com axios -> success
      return <Redirect to='/home' />
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="signin">
      {this.renderRedirect()}
        <div>
          <div><text>Faça Login Com:</text></div>
        </div>
        <div> 
          <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
                <img className="img" src={logo} width="50%" height="50%" alt=""/>
              </FormGroup>
              <FormGroup controlId="email" bsSize="large">
              <FormControl
                autoFocus
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <FormControl
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              className="btn btn-primary"
              size="sm"
              disabled={!this.validateForm()}
              type="submit"
              onClick={this.setRedirect}          >
              Entrar
            </Button>
          </form>
        </div>
      </div>
    );
  }
}