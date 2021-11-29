import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home" style={{fontWeight: 'bold', fontSize:30}}>
                  Portfolio
                
                    </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
                    <a style={{textDecoration: 'none'}} target="_blank" href="https://drive.google.com/file/d/1-fu4mlQVIqjurn1XxG-vcCVce3Rb2x7i/view" rel="noreferrer">Resume</a>

                    {/* <Button as={Link} to="https://drive.google.com/file/d/1PWOhw3_u8SBQzbyl6IVw5BYcguaui5aN/view?usp=sharing">Resume</Button> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;