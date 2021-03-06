import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-style py-5 mt-5 fixed">
            <Container>
                <Row>
                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <p>I just find myself happy with the simple things. Appreciating the blessings God gave me.
                            </p>
                            <div className="footer-icon">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <div>
                                <Link to="/home" className="quick-link">
                                    Home
                                </Link>
                                
                            </div>
                            <div className="quick-link">
                                <Link to="/contact" className="quick-link">
                                    contact
                                </Link>
                            </div>
                            <div className="quick-link">
                                <Link to="/about" className="quick-link">
                                    About
                                </Link>
                            </div>
                            <div className="quick-link">
                                <Link to="/blog" className="quick-link">
                                    Blog
                                </Link>
                            </div>
                            
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-3">
                        <div>
                            <div>
                                <span>3596 Banani Ave, NY</span>
                            </div>
                            <div className="my-2">
                                <span>818-5670-8750</span>
                            </div>
                            <div>
                                <span>sudiptaadhikaryjoy@gmail.com</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={12} className="my-3">
                        <div >
                            <h4>Notify Me</h4>
                            <div className="d-flex">
                            
                            <input type="email" placeholder="Email address" />
                            <button className="footer-button">subscribe</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
            </Container>
        </div>
    );
};

export default Footer;