import React, { useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Project = ({project}) => {
    const {name, img} = project;
    const {setCart} = useContext(UserContext);

    return (
        <Col>
        <Card className="shadow mb-4">
          <div className="d-flex align-items-center p-2">
            <Card.Img
              className="w-100 pt-3"
              style={{ objectFit: "contain", height: "300px" }}
              variant="top"
              src={img}
            />
          </div>
          <Card.Body>
            <Card.Title style={{fontWeight: 'bold', marginTop: '20px'}}>{name}</Card.Title>
            {/* <Card.Text>{description}</Card.Text> */}
            <Button as={Link} to="/details" onClick={()=>setCart(project)} className="service-btn"> More Details</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Project;