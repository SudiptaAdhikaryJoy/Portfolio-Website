import React from 'react';
// import Particles from "react-tsparticles";
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Particles from 'react-tsparticles';


const Home = () => {
    const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
    
    return (
        <div>
      
            <Banner></Banner>
            <About/>
            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 96,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 6,
              opacity: 0.11,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#bdc3c7",
          },
          links: {
            color: "#203A43",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            // straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "edge",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
            <Projects/>
            <Skills/>
            <Contact></Contact>
        </div>
    );
};

export default Home;