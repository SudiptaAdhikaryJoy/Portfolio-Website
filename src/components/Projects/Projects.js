import React from 'react';
import { Container, Card, CardGroup } from 'react-bootstrap';
import'./Projects.css';

const Projects = () => {
    return (
       <>
        

<Container className="top">
           <h2 className="title">Projects</h2>
            <CardGroup>
  <Card className='single_card'>
    <Card.Img variant="top" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/180CA/production/_119360589_cars.jpg" />
    <Card.Body>
      <Card.Title>CAR SALES</Card.Title>
      <Card.Text>
      	 Responsive website.
	    Firebase Login System.
         Technology: React, React-Bootstrap, Firebase Authentication, Node, Express, Mongodb

      </Card.Text>
    </Card.Body>
  </Card>
  <Card className='single_card'>
    <Card.Img variant="top" src="https://www.thestatesman.com/wp-content/uploads/2018/04/Fashion-Store.jpg" />
    <Card.Body>
      <Card.Title>FASHION STORE</Card.Title>
      <Card.Text>
          This is Fashion Store website.Technology used react, bootstrap, CSS, netlify.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className='single_card'>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5odqFR-_emf_v0jeVs21eOKsOacJFhyhtQ&usqp=CAU" />
    <Card.Body>
      <Card.Title>TOUR BOOKING</Card.Title>
      <Card.Text>
        This is a Tourism related website.
    	 Technology: React, React-Bootstrap, Firebase Authentication, Node, Express, Mongodb

      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
       </Container>
       </>
    );
};

export default Projects;