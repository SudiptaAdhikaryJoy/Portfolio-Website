import React from 'react';
import Typical from 'react-typical';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/IMG09.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
              <section class="top_banner flexible_container">
        <div class="half_width" style={{marginTop:'100px'}}>
            <h1>Welcome To</h1>
        <h2><span class="title_color">Sudipta Adhikary Joy</span> World</h2>
        <h3 style={{color: '#203A43'}}>I am Sudipta Adhikary Joy and I am a<span>
            {" "}
            <h1 style={{color: '#457fca'}}>
                {" "}
                <Typical
                loop={ Infinity}
                steps={[
                    "Full Stack Developer",
                    900, 
                    "MERN Stack Developer",
                    900, 
                    "Backend Stack Developer",
                    800, 
                ]}
                 />
            </h1>
            </span> with glorious purpose.</h3>
        
        
        {/* <a class="link_button" target="_blank" href="https://www.linkedin.com/company/programminghero/">HIRE ME</a> */}
        <Button style={{marginTop:'20px'}}><a style={{color:'#fff', textDecoration: 'none'}} href="https://www.linkedin.com/in/sudipta-adhikary-joy-4b6318148/">Learn More</a></Button>

        </div>
       
        <div class="half_width">
            <img style={{height: '70vh'}} className="img-fluid" src={img} alt="" />
        </div>
        
    </section>

        </>

    );
};

export default Banner;

