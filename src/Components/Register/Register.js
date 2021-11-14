import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth} from "firebase/auth";


const Register = () => {

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        }) 
    }

    const auth = getAuth();

    const {signInUsingGoogle} = useAuth();

    return (
        <div className="mx-5 d-flex align-items-center flex-column mb-5 mt-5">
        <h1 className="text-primary mt-5 mb-5">Please Sign In</h1>
            
            <div className="mb-5">
                <button onClick={signInUsingGoogle,handleGoogleLogin}className="btn btn-primary">Google Sign In</button>    
            </div> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>
    );
};

export default Register;