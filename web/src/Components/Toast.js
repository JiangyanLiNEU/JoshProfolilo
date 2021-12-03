

import small from '../img/photo2.jpeg'
import {useState} from 'react';
import {Row, Col, Button, Toast, Image, ToastContainer} from 'react-bootstrap';
export const TToast = () => {
  const [showA, setShowA] = useState(true);
  const [showB, setshowB] = useState(false);
  const toggleShowA = () => {
      setShowA(!showA);
      setshowB(!showB);
    };
  return (
      <div>
      <div id='toast' style={{margin: 10, position:'fixed', bottom:0, right:0}}>{showB && <Button onClick={toggleShowA}>Message from Josh</Button>}</div>
      
    <ToastContainer id='toast' style={{margin: 10, position:'fixed', bottom:0, right:0}}>
        
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
          <Image width="30" height="30" src={small} className="rounded me-2" alt="" />
                  <strong className="me-auto">Josh</strong>
                  <small className="text-muted">2 seconds ago</small>
          </Toast.Header>
          <Toast.Body>Hello! I am Joshua Kazdan! Welcome to my website! Feel free to send email to me if you want to talk to me! Hope you have a great day! 
          <br/> 
          <ul>
          <li>Email: <a href='#'>kazdan@g.ucla.edu</a></li>
          <li>Address: UCLA Math Department</li>
          </ul>
          </Toast.Body>
        </Toast></ToastContainer></div>
  );
}