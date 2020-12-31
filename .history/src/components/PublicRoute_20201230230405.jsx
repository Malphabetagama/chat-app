import React from 'react';
import { Redirect } from 'react-router';

const PublicRoute = ({ children, ...routeProps }) => {

    const profile = false;


    if(profile) {
        return <Redirect to="/signin"/>;
    }

    
    return (
        <Route {...routeProps}>
            {children}
        </Route>
    );
};

export default PublicRoute;

