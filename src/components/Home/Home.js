import React from 'react';
// import Particles from "react-tsparticles";
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    
    return (
        <div>
      
            <Banner></Banner>
            <About/>
            <Projects/>
            <Skills/>
            <Contact></Contact>
        </div>
    );
};

export default Home;