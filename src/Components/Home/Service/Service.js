import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {

    const {_id, image,name,description} = props.services;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" className="h-50" src={image} />
                    <Card.Body>
                    <Card.Title className="fs-3 fw-bold pb-2">{name}</Card.Title>
                    <Card.Text>
                        <p className="fs-5"> {description}</p>
                        <Link to ={`/placeOrder/${_id}`}>
                            <button className="btn btn-primary">Order Now</button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;