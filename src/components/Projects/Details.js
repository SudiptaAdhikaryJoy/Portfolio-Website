import React, { useContext } from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import { UserContext } from '../../App';

const Details = () => {
        const {cart} = useContext(UserContext);

    
    return (
        <Container style={{fontWeight: 'bold', marginTop:'50px'}}>
            
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src={cart.img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First Image</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src={cart.img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second Image</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cart.img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third Image</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <h2 style={{marginTop: '30px', fontWeight: 'bold'}}>{cart.name}</h2>
        <h5>1. An user can login and go to the service which is private route</h5>
        <h5>2. An user can get access all the routes without private route</h5>
        <h5>3. An user can easily get the details</h5>
        <h5>4. Users can authenticate through email and third
                 party authentications.</h5>
        <h5>5. An users order and book their session and supplements</h5>
        <br />
        <a target="_blank" style={{textDecoration: 'none'}} href={cart.client}>Client Side</a>
        <a target="_blank" href={cart.link} style={{marginLeft:'10px',textDecoration: 'none'}}>Website</a>
         <a target="_blank" href={cart.server} style={{marginLeft:'10px',textDecoration: 'none'}}>Server Side</a>
</Container>
    );
};

export default Details;