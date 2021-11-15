import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Beach from '../Beach/Beach';

const Beaches = () => {

    const [beaches, setBeaches] = useState([]);

      useEffect(()=> {
        fetch('https://damp-lowlands-43379.herokuapp.com/beaches')
            .then(res => res.json())
            .then(data => setBeaches(data));
      }, []) 

    return (
        <Container id="beaches">
            <div className="Container Fluid">
                <h2 className="fs-1 fw-bold text-primary mt-5 mb-5">Beach</h2>
                <Row xs={1} md={3} className="g-4 gs-4">
                    {
                        beaches.map(beach => <Beach
                        beaches = {beach}
                        ></Beach> )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default Beaches;