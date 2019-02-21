import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handletextChangeLogin = this.handletextChangeLogin.bind(this);
    this.handletextChangePassword = this.handletextChangePassword.bind(this);
    this.state = {
      login: '',
      password: ''
    };
  }

  handleSubmit(e){
    e.preventDefault()
  }

  handletextChangeLogin(text){
     this.setState({
        login: text.target.value
     })
  }

  handletextChangePassword(text){
    this.setState({
       password: text.target.value
    })
 }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input value={this.state.login} onChange={this.handletextChangeLogin}/>          <br />
            <input value={this.state.password} onChange={this.handletextChangePassword}/>         <br />
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

