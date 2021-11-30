import React from 'react';
import { Container, Card, CardGroup,Button } from 'react-bootstrap';
import'./Projects.css';

const Projects = () => {
    return (
       <>
        

<Container className="top">
           <h2 className="title">Projects</h2>
            <CardGroup>
  <Card id="#projects" className='single_card border-1 rounded-4 border'>
    <Card.Img variant="top" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/180CA/production/_119360589_cars.jpg" />
    <Card.Body>
      <Card.Title style={{fontWeight: 'bold'}}>Dodge Cars</Card.Title>
      <Card.Text style={{fontWeight: 'bold'}}>
        Technology: React, React-Bootstrap, Firebase Authentication, Node, Express, Mongodb
      </Card.Text>
      <Button>Details</Button>
    </Card.Body>
  </Card>
  <Card className='single_card'>
    <Card.Img variant="top" src="https://previews.123rf.com/images/vectorknight/vectorknight1811/vectorknight181100007/112003696-mobile-application-development-process-software-api-prototyping-and-testing-background-experienced-t.jpg" />
    <Card.Body>
      <Card.Title style={{fontWeight: 'bold'}}>BENGALDROID SOFTWARE TEAM</Card.Title>
      <Card.Text style={{fontWeight: 'bold'}}>
        Technology: React, React-Bootstrap, Firebase Authentication, Node, Express, Mongodb
      </Card.Text>
      <Button>Details</Button>
    </Card.Body>
  </Card>
  <Card className='single_card'>
    <Card.Img variant="top" src="https://wallpaperaccess.com/full/1087589.jpg" />
    <Card.Body>
      <Card.Title>FITNESSEDGE GYM</Card.Title>
      <Card.Text style={{fontWeight: 'bold'}}>
        
    	 Technology: React, React-Bootstrap, Firebase Authentication, Node, Express, Mongodb

      </Card.Text>
      <Button>Details</Button>
    </Card.Body>
  </Card>
</CardGroup>
       </Container>
       </>
    );
};

export default Projects;