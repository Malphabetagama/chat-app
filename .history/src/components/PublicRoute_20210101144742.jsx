import React from 'react';
import { Redirect,Route } from 'react-router';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children, ...routeProps }) => {

    const {profile} = useProfile();


    if(isLoading && !profile){
        return ( <Container>
            <Loader center vertical size="md" content="isLoading" speed="slow" />
        </Container>
        );
    }


    if(!profile && !isLoading) {
        return <Redirect to="/signin" />;
    }





    if(profile) {
        return <Redirect to="/" />;
    }

    
    return (
        <Route {...routeProps}>
            {children}
        </Route>
    );
};

export default PublicRoute;

