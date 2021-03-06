import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar bg='dark' variant='dark' sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand as={Link} to="/home" style={{fontWeight: 'bold', fontSize:30, color:'#a8c0ff'}}>
                  Sudipta Adhikary 
                
                    </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link  style={{color: '#bdc3c7'}} as={Link} to="/home#home">Home</Nav.Link>
                    <Nav.Link style={{color: '#bdc3c7'}} as={Link} to="/projects#projects">Projects</Nav.Link>
                    <Nav.Link style={{color: '#bdc3c7'}} as={Link} to="/about#about">About Me</Nav.Link>
                    <Nav.Link style={{color: '#bdc3c7'}} as={Link} to="/blog#blog">Blog</Nav.Link>
                    <Nav.Link style={{color: '#bdc3c7'}} as={Link} to="/contact#contact">Contact Me</Nav.Link>
                    <a style={{textDecoration: 'none',color: '#bdc3c7'}} target="_blank" href="https://drive.google.com/file/d/1H7FEXcnRD06iBXs1FTT9azHWYxybMb13/view?usp=sharing" rel="noreferrer">Resume</a>

                    {/* <Button as={Link} to="https://drive.google.com/file/d/1PWOhw3_u8SBQzbyl6IVw5BYcguaui5aN/view?usp=sharing">Resume</Button> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;