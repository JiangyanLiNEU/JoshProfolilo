
import Img from '../img/josh-1.jpeg';
import {Container, Row, Image, Col, ToastContainer, Toast} from 'react-bootstrap';
import small from '../img/photo2.jpeg';


export const Home = () => {
    const backGround = {backgroundColor: "#dfe7fd", padding: 10};
    return (
        <div>
        <div style={backGround} className='container'>
            <Container style = {{margin:10}}>
                <Row>
                    <Col >
                        <Image src={Img} fluid/>
                    </Col>
                    <Col style={{margin:"auto"}}>
                        <Row><h3>Say something smart here</h3></Row>
                        <Row><h4>Such as I love Lily.</h4></Row>
                        <Row><h5>Or I will do laundry on time!</h5></Row>
                    </Col>
                </Row>
            </Container>
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