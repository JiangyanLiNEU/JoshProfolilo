import {ListGroup, Button} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
export const Math = () => {
    return (
        <div className='container'>
          <h3 style={{textAlign:'left'}}>Papers: </h3>
          <div className='container' style={{marginTop:20}}>
          <ListGroup variant="flush" >
            <ListGroup.Item><a style={{textDecoration:'none'}} href="https://www.researchgate.net/publication/345187370_Spiders_and_their_Kin_An_Investigation_of_Stanley's_Chromatic_Symmetric_Function_for_Spiders_and_Related_Graphs">Spiders and their Kin: An Investigation of Stanley’s Chromatic Symmetric Function for Spiders and Related Graphs</a> : Graphs and Combinatorics</ListGroup.Item>
            <ListGroup.Item><a style={{textDecoration:'none'}} href="https://www.researchgate.net/publication/341032398_Primes_with_Beatty_and_Chebotarev_conditions">Primes with Beatty and Chebotarev conditions</a> : Journal of Number Theory
</ListGroup.Item>
          </ListGroup><br/>
          <Spinner style={{marginLeft:20}} animation="border" size="sm" />
          <Spinner animation="border" />
          </div>
          <br/>

        </div>
    );
};