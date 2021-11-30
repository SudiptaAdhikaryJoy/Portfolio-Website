import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/IMG01.jpg';
import './About.css';

const About = () => {
    return (
        <>
        <Container id='#about' style={{marginTop:'80px'}}>
        <div class="about">
        <div class="half">
        <img className="img-fluid border-1 rounded-1" src={img} alt="" />
        </div>
        <div class="half">
            <h1 style={{fontWeight: 'bold'}}>About Me</h1>
            <h3>Jr. MERN Stack Developer</h3>
            <p> Thanks for having me
           I'm Sudipta Adhikary Joy from Bangladesh. I'm interested in problem solving and learning new stuff. I would like to learn more on web development and technology . I am a computer science student wanting to increase my knowledge on computer science as well. I know this community would help me a lot to learn so many things.</p>
            <Button class="link_button" target="_blank" as={Link} to="/about" >Read More</Button>
            {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}

        </div>

    </div>
        </Container>
        </>
    );
};

export default About;