import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
    return (
        
             <>
            <Container>
            <h2 className="skills_title"> My Skills</h2>
        
        <div className="skills">
        <div className="skill">
        <h3> <i class="fab fa-html5"></i> HTML CSS</h3>
        <ProgressBar animated now={80} label={`80%`} />
            </div>

        <div className="skill">
        <h3> <i class="fab fa-bootstrap"></i> Bootstrap</h3>
        <ProgressBar animated now={80} label={`80%`} />
            </div>

        <div className="skill">
        <h3> <i class="fab fa-js"></i> JavaScript</h3>
        <ProgressBar animated now={70} label={`70%`} />
            </div>
        <div className="skill">
        <h3> <i class="fab fa-react"></i> React JS</h3>
        <ProgressBar animated now={70} label={`70%`} />
            </div>
        <div className="skill">
        <h3> <i class="fab fa-microsoft"></i> C++</h3>
        <ProgressBar animated now={70} label={`70%`} />
            </div>
        <div className="skill">
        <h3> <i class="fab fa-microsoft"></i> Tailwind</h3>
        <ProgressBar animated now={70} label={`70%`} />
            </div>
        </div>
            </Container>
        </>
        
    );
};

export default Skills;