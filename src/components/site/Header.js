import React from 'react';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import logo from '../../assets/logotitle.png';
import "./Header.css";

export default class Header extends React.Component {
   render() {
      return (
         <Navbar className="navbar" bg="primary" variant="dark">
            <Navbar.Brand>
            <img src={logo} width="23%" height="48px" alt="" />
            </Navbar.Brand>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            <a href="/profile"><FaUser className="icon" /></a>
            </Form>
        </Navbar>
      );
   }
}