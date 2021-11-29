import React from 'react';
import { Container } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
    return (
        <>
            <Container>
            <h2 className="skills_title"> My Skills</h2>
        
        <div className="skills">
        <div className="skill">
        <h3> <i class="fab fa-html5"></i> HTML CSS</h3>
            </div>

        <div className="skill">
        <h3> <i class="fab fa-bootstrap"></i> Bootstrap</h3>
            </div>

        <div className="skill">
        <h3> <i class="fab fa-js"></i> JavaScript</h3>
            </div>
        <div className="skill">
        <h3> <i class="fab fa-react"></i> React JS</h3>
            </div>
        <div className="skill">
        <h3> <i class="fab fa-microsoft"></i> Microsoft Word</h3>
            </div>
        <div className="skill">
        <h3> <i class="fab fa-microsoft"></i> MicroSoft PowerPoint</h3>
            </div>
        </div>
            </Container>
        </>
    );
};

export default Skills;