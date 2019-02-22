import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';
import Home from './components/Home.js';
import Login from './components/Login.js';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route { ... rest} render={props => 
        isAuthenticated() ? 
        (
            <Component { ... props} />
        ) : (
            <Redirect to={{pathname: "/", state: { from: props.location}}} />
        )
} 
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/" component={Login} /> 
        </Switch>
    </BrowserRouter>
);

export default Routes;