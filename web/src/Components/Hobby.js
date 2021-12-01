import React from 'react'
import chess from '../img/chess.jpeg';
import book from '../img/book.jpeg';
import bobaTesting from '../img/boba tasting.JPG';
import travel from '../img/travling.JPG';
import ski from '../img/sking.JPG';
import hike from '../img/hiking.JPG'
import {Row, Col} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
const images = [
    {title:"Books",content: 'I love reading', obj: book},
    {title:"Traveling",content:'been to six continents and I was feeding lizzard for the first time lol', obj:travel},
    {title:"Chess",content:'Interested in chess', obj:chess},
    {title:"Boba",content:'Boba tasting is fun!', obj:bobaTesting},
    {title:"Ski",content:'Tahoe or Canada?', obj:ski},
    {title:"Hike",content:'I love hiking! The form down below is my invitation for you to hike together. submit the form and I will get the email notification!', obj:hike}
]
// chess, bobaTesting, travel, ski, hike];
export const Hobby = () => {
    const block = images.map((image) => (
        <Card style={{ width: '18rem', height: '18rem'}}>
  <Card.Img variant="top" src={image.obj} />
  <Card.Body>
    <Card.Title>{image.title}</Card.Title>
    <Card.Text>
      {image.content}
    </Card.Text>
  </Card.Body>
</Card>
      ));
    return (
        <div>
        <div className="container">
        <div className='container' style={{marginBottom:50}}>
        <Row>
            <Col>{block[0]}</Col>
            <Col>{block[1]}</Col>
            <Col>{block[2]}</Col>
        </Row>
        </div>


        <hr/>
        <div className='container' style={{marginTop: 50}}>
        <Row>
            <Col>{block[4]}</Col>
            <Col>{block[5]}</Col>
            <Col>{block[3]}</Col>
        </Row>
        </div>
        </div>
        </div>
    );
    
};