
import {Container, Row, Image, Col, ToastContainer, Toast} from 'react-bootstrap';
import small from '../img/photo2.jpeg';
import tree from '../img/stanfordtree.png';
import bear from '../img/uclabear.png';
import { Quote } from './Quote';
import { TToast } from './Toast';
export const Home = () => {
    const backGround = {backgroundColor: "#dfe7fd", padding: 10};
    return (
        <div id='homeDiv'>
        <div style={backGround} className='container'>
            <Container style = {{margin:10}}>
                <Row>
                    <Col>
                        <Image src={small} fluid/>
                    </Col>
                    <br/>
                    <Col style={{margin:"auto"}}>
                        <Quote />
                    </Col>
                </Row>
            </Container>
        </div>


        <div className='container' style={{padding:50}}>
          <Row >
              <Col style={{display:'flex', justifyContent:'center'}}><img style={{maxWidth:'80%', maxHeight:'80%'}} src={tree} alt='' fluid/></Col>
              <Col style={{display:'flex', justifyContent:'center'}}><img style={{maxWidth:'80%', maxHeight:'80%'}} src={bear} alt='' fluid/></Col>
          </Row>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <TToast/>
        
        {/* <div id='div_of_toast' className='container'>
        <ToastContainer id='toast' style={{margin: 10, position:'fixed', bottom:0, right:0}}>
              <Toast>
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
              </Toast>
            </ToastContainer>
        </div>
         */}
        </div>
    );
};