
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import { YoutubeEmbed } from "./YoutubeEmbed";
import { ControlledCarousel } from './Carousel';
import Button from 'react-bootstrap/Button'
export const Teaching = () => {
  const itemStyle = {width:'50%', marginLeft:'25%', textAlign:'center'};
    return (
        <div>
            <div className='container' id='teachingList'>
            <div style={{padding: 10, fontStyle:'Italic'}}>
              <h3 style={{display:'table', margin:'auto'}}>Teaching at UCLA</h3>
            </div>
            <br/>
            <ListGroup>
              <ListGroup.Item style={itemStyle}><span>Math 32A (2021 Fall)</span></ListGroup.Item>
              <ListGroup.Item style={itemStyle}><span>Math 32B (2021 Spring)</span></ListGroup.Item>
              <ListGroup.Item style={itemStyle}><span>Math 32B (2020 Winter)</span></ListGroup.Item>
             </ListGroup>
          </div>
          <br/>
          <br/>
          <div className='container' style={{margin:'auto'}}>
          <ControlledCarousel />
          </div>
          <br/>
          <div style={{display:'flex', justifyContent:'center'}}>
          <Button variant="outline-primary"><span style={{fontWeight:'bolder'}}>My Youtube Channel</span></Button>{' '}
           
        </div>
        </div>

    );
};