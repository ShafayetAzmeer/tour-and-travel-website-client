import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-light text-center d-flex p-4 pt-5 align-self-baseline mt-5">
            <Container>
                <Row xs={1} md={4} className="g-4 gs-4">
                       <div>
                            <p>Help</p>
                            <p>Blog</p>
                            <p>Contact</p>
                       </div>
                       <div>
                            <p>Foundation History</p>
                            <p>Mission and Vision</p>
                            <p>Unique Criteria</p>
                       </div>
                       <div>
                            <p>FAQ</p>
                            <p>Community</p>
                            <p>Forums</p>
                       </div>
                       <div>
                            <p>Terms</p>
                            <p>Licenses</p>
                            <p>Privacy Policy</p>
                       </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;