import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Beach = (props) => {

    const {img,name,description} = props.beaches;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className="fs-3 fw-bold pb-2">{name}</Card.Title>
                    <Card.Text>
                        <p className="fs-5"> {description}</p>
                        
                            <button className="btn btn-primary">Order Now</button>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Beach;