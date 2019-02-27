import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';
import Home from './components/Home.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Profile from './components/Profile.js';


const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route { ... rest} render={props => 
        isAuthenticated() ? 
        (
            <Component { ... props} />
        ) : (
            <Redirect to={{pathname: "/signup", state: { from: props.location}}} />
        )
} 
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/signin" component={Signin} />
            <PrivateRoute exact path="/home" component={Home} /> 
            <PrivateRoute exact path="/signup" component={Signup} /> 
            <PrivateRoute exact path="/profile" component={Profile} /> 
        </Switch>
    </BrowserRouter>
);

export default Routes;