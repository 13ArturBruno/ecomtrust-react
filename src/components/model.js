import React from 'react';
import Modal from 'react-modal';
import {Button, FormGroup, FormControl } from "react-bootstrap";
import "./css/Signin.css";
import logo from '../assets/logotitle.png';
import gg from '../assets/google-icon.png';
import fb from '../assets/facebook-icon.png';
import { Redirect } from 'react-router-dom'

const customStyles = {
  content : {
    width                 : '30%',
    height                : '37%',
    top                   : '22%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export default class Modeltest extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="panel">
            <div className="panel-options">
                <div className="Login-with">
                    <text>Entrar com:</text>
                </div>
                <div className="facebook-login">
                    <div className="div-img-fb"><img className="icon" src={fb}  alt=""/></div>
                    <div className="div-text-fb"><text>Facebook</text></div>
                </div>
                <div className="line"><div className="line-separator"></div></div>
                <div className="google-login">
                    <div className="div-img-gg"><img className="gg-icon icon" src={gg} alt=""/></div>
                    <div className="div-txt-gg"><text>Google</text></div>
                </div>
            </div>
            <div className="panel-form">
                <FormGroup className="space-img" controlId="email" bsSize="large">
                    <div className="div-img"><img  ref={subtitle => this.subtitle = subtitle} className="img" src={logo} width="100%" height="100%" alt=""/></div>
                    <div className="div-title"><text className="text-title">Faça Login:</text></div>
                </FormGroup> 
                <FormGroup className="space" controlId="email" bsSize="large">
                <FormControl
                    autoFocus
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />         
                </FormGroup>
                <FormGroup className="space" controlId="password" bsSize="large">
                <FormControl
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.handleChange}
                    type="password"
                />
                </FormGroup>
                <Button
                block
                className="space btn btn-primary"
                size="sm"
                type="submit"
                >
                Entrar
                </Button>
                <div className="forget-create">
                    <text className="forget-text">Esqueceu Sua Senha ?</text>
                    <text className="create-text">Criar Conta</text>
                </div>
            </div>
        </div>
          </Modal>
      </div>
    );
  }
}

