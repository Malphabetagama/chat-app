import React from 'react';
import { Redirect } from 'react-router';

const PrivateRoute = ({ children, ...routeProps }) => {

    const profile = false;
    if(!profile) {
        return <Redirect to="/signin"/>
    }
}

const PrivateRoute = () => {
    return (
        <Route>
            
        </Route>
    )
};

export default PrivateRoute;
