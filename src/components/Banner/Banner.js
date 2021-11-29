import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/IMG09.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
              <section class="top_banner flexible_container">
        <div class="half_width">
            <h1>Welcome To</h1>
        <h2><span class="title_color">Sudipta Adhikary Joy</span> World</h2>
        <h3 style={{color: 'white'}}>I am Sudipta Adhikary Joy and I am burdened <br /> with glorious purpose.</h3>
        <p className="peragraph" style={{color:'#fff', fontWeight: 500, fontSize: 20}}>Thanks for having me
           I'm Sudipta Adhikary from Bangladesh. I'm interested in problem solving and learning new stuff. I would like to learn more on web development and technology . I am a computer science student wanting to increase my knowledge on computer science as well. I know this community would help me alot to learn so many things. </p>
        
        {/* <a class="link_button" target="_blank" href="https://www.linkedin.com/company/programminghero/">HIRE ME</a> */}
        <Button><a style={{color:'#fff', textDecoration: 'none'}} href="https://www.linkedin.com/in/sudipta-adhikary-joy-4b6318148/">Learn More</a></Button>

        </div>
       
        <div class="half_width">
            <img style={{height: '70vh'}} className="img-fluid" src={img} alt="" />
        </div>
        
    </section>

        </>

    );
};

export default Banner;

