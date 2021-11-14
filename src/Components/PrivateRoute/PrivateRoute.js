import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const{user, isLoading} = useAuth();
    if(isLoading){
        return  <div className="mt-5 mb-5">
            <h1 className="fs-1 fw-bold text-primary mt-5 mb-5">Your Requested Page Is Loading</h1>
            <h1 className="fs-1 fw-bold text-primary mt-5 mb-5">Please Wait For A While</h1>
            <Spinner className="mt-5 mb-5" animation="border" variant="primary" />
        </div>
    }

    return (
        <Route
        {...rest}
            render={({location})=> user.email ? children : <Redirect
                to={{
                    pathname: "/register",
                    state: { from: location }
                }}
            
            ></Redirect>}
        ></Route>
    );
};

export default PrivateRoute;