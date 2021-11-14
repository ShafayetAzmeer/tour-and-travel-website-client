import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="  mt-5 mb-5">
            <h1 className=" mt-5 mb-5">404</h1>
            <h1 className=" p-5 mt-5 mb-5">Page Not Found</h1>
            <Link to ="/"><button className="btn btn-primary mb-5">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;