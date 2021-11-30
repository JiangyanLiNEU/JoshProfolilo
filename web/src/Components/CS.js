import {ListGroup, Button} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
export const CS = () => {
    return (
        <div className='container'>
          <h3 style={{textAlign:'left'}}>Courses: </h3>
          <div className='container' style={{marginTop:20}}>
          <ListGroup variant="flush" >
            <ListGroup.Item>Neutral network</ListGroup.Item>
            <ListGroup.Item>Reinforstment Learning</ListGroup.Item>
            <ListGroup.Item>Mathematical machine learning theory</ListGroup.Item>
            <ListGroup.Item>Machine learning</ListGroup.Item>
            <ListGroup.Item>Computer Architecure</ListGroup.Item>
        </ListGroup><br/>
          <Spinner style={{marginLeft:20}} animation="border" size="sm" />
          <Spinner animation="border" />
          </div>
          <br/>

          <h3 style={{textAlign:'left'}}>Industrial Experience: </h3>
          <div className='container' style={{marginTop:20}}>
          <ListGroup variant="flush" >
            <ListGroup.Item>Microsoft Data Science Intern (Jun 2021 - Oct 2021)</ListGroup.Item>
            <ListGroup.Item>ByteDance AI Lab ML intern (Jun 2020 - Oct 2020)</ListGroup.Item>
          </ListGroup>
          <br/>
          <Spinner style={{marginLeft:20}} animation="grow" size="sm" />
  <Spinner animation="grow" /></div>
        </div>
    );
};