import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Heritage from '../Heritage/Heritage';

const Heritages = () => {

    const [heritages, setHeritages] = useState([]);

      useEffect(()=> {
        fetch('http://localhost:7000/heritages')
            .then(res => res.json())
            .then(data => setHeritages(data));
      }, [])  

    return (
        <Container id="heritages">
        <div className="Container Fluid">
            <h2 className="fs-1 fw-bold text-primary mt-5 mb-5">Heritage</h2>
            <Row xs={1} md={3} className="g-4 gs-4">
                {
                    heritages.map(heritage => <Heritage
                    heritages = {heritage}
                    ></Heritage> )
                }
            </Row> 
        </div>
    </Container>    );
};

export default Heritages;