import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from '../Projects/Project';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetch("./data.json")
      .then(res => res.json())
      .then(data => setProjects(data))
    }, []);


  return (
    <div style={{marginTop:'50px'}}>
            <h2 className="service-title" style={{fontWeight: 'bold'}}>My Projects</h2>
       
        <div className="service-container">
             
           <Container className="container__style">
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {
                projects.map(project => <Project project={project}></Project>)
            }
            </Row>
            </Container>
        </div>
        </div>
  );
};

export default Projects;