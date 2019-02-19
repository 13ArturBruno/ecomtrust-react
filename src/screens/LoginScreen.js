import React, { Component } from 'react';
import './screens.css';

const logo = require('../assets/logotitle.png')

class LoginScreen extends Component {
  render() {
    return (
      <div className="Body">
        <img src={logo} width="350"/>
        <form>
          <label>
            Login:
            <input type="text" name="login" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginScreen;
