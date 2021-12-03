import React from 'react'
import chess from '../img/chess.jpeg';
import book from '../img/book.jpeg';
import bobaTesting from '../img/boba tasting.JPG';
import travel from '../img/travling.JPG';
import ski from '../img/sking.JPG';
import hike from '../img/hiking.JPG'
import {Row, Col} from 'react-bootstrap';
import {Card, Form,Button} from 'react-bootstrap';
import { useState } from 'react';
const images = [
    {title:"Books",content: 'Book lists coming soon', obj: book},
    {title:"Traveling",content:'Lizzard Park', obj:travel},
    {title:"Skiing",content:'Tahoe or Canada?', obj:ski},
    {title:"Hike",content:' If you are nice, you can invite me to hike with you using the form down below :)', obj:hike}
]
// chess, bobaTesting, travel, ski, hike];
export const Hobby = () => {
  let h;
    const block = images.map((image, index) => {
      index === 0 || index===1 ? h='18rem' : h='34rem';
      return (
        <Card style={{ width: '18rem', height: h}}>
  <Card.Img variant="top" src={image.obj} />
  <Card.Body>
    <Card.Title>{image.title}</Card.Title>
    <Card.Text>
      {image.content}
    </Card.Text>
  </Card.Body>
</Card>)}
      );
    const [submitted, setsubmitted] = useState(false);
    
    const handleClick = (e) => {
      setsubmitted(true);
    }


    const formEle = (
      <div className='container' style={{width:'50%'}}>
        <Form id='form'>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label style={{color:'#1a7431', fontWeight:'bold'}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="please let me know your email or phone number :)" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label style={{color:'#1a7431', fontWeight:'bold'}}>Leave me a message and I will get back to you ASAP!</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <div className='container' style={{display:'flex', justifyContent:'center'}}>
  <Button onClick={handleClick} variant="success" type="submit">
    Submit
  </Button></div>
</Form></div>
    );

    const confirmation = <div className='container'><h3 style={{color:'#1a7431', fontWeight:'bold'}}>Thanks for your invitation! I am excited to hike with you!!</h3></div>

    return (
        <div className='container' style={{margin:'auto'}}>
        <div className="container">
        <div className='container' style={{marginBottom:50}}>
        <Row>
            <Col>{block[0]}</Col>
            <Col>{block[1]}</Col>
        </Row>
        </div>
        <br/>
        <div className='container' style={{marginTop: 50}}>
        <Row>
            <Col>{block[2]}</Col>
            <Col>{block[3]}</Col>
        </Row>
        </div>
        </div>
        <br/>
        {submitted===false ? formEle : confirmation}
        
        </div>
    );
    
};