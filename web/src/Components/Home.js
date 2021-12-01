
import {Container, Row, Image, Col, ToastContainer, Toast} from 'react-bootstrap';
import small from '../img/photo2.jpeg';
import tree from '../img/stanfordtree.png';
import bear from '../img/uclabear.png';
import { Quote } from './Quote';

export const Home = () => {
    const backGround = {backgroundColor: "#dfe7fd", padding: 10};
    return (
        <div>
        <div style={backGround} className='container'>
            <Container style = {{margin:10}}>
                <Row>
                    <Col >
                        <Image src={small} fluid/>
                    </Col>
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
              <Col></Col>
          </Row>
        </div>
        <div className='container'>
        <ToastContainer position="bottom-end" style={{margin: 10}}>
              <Toast>
                  <Toast.Header>
                  <Image width="30" height="30" src={small} className="rounded me-2" alt="" />
                  <strong className="me-auto">Josh</strong>
                  <small className="text-muted">2 seconds ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello! I am Joshua Kazdan! Welcome to my website done by my kind, smart, talented, beautiful girlfriend who is much better than Skylar! If you want to contact me, please send email to <a href='#'>kazdan@g.ucla.edu</a> Thank you!</Toast.Body>
              </Toast>
            </ToastContainer>
        </div>
        
        </div>
    );
};