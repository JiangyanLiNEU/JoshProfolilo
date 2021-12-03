import {ListGroup, Button} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import {Chrono} from 'react-chrono';
import m from '../img/microsoft.png';
import t from '../img/tiktok.jpeg';
import v from '../img/volo.png';
import em from '../img/emory.png';
import field from '../img/fields.png';
export const CS = () => {
  let window_width = window.innerWidth;
  let window_height = window.innerHeight;
  console.log(window_height)
  let height;
  window_height <= 667 ?  height = window_height*0.7 : height = window_height-110;
  const createItem = (time, cardTitle, url, subtitle, details, img) => {
    return {
      title: time,
  cardTitle: cardTitle,
  url:url,
  cardSubtitle:subtitle,
  cardDetailedText: details,
  media: {
    type: "IMAGE",
    source: {
      url: img
    }
  }
    }
  }
  const items = [
    createItem('July 2022', 'Microsoft Intern','','Data Science Intern','Will update detailed intern experience after I finish.',m),
    createItem('May 2022', 'Voloridge Asset Intern', '', 'Quant Researcher', 'First time trying quant trading/research, I am looking forward to it.', v),
    createItem('June 2021', 'Bytedance Intern','', 'AI Lab Research Scientist Intern','Josh: do you want to add some details here?',t),
    createItem('May 2019', 'Emory','https://uva.theopenscholar.com/ken-ono/reus','REU', 'Josh: do you want to add some details here?', em),
    createItem('July 2018', 'Fields Institude','http://www.fields.utoronto.ca/activities/21-22/2021-FUSRP', 'REU','Josh: do you want to add some details here?', field)
  ];


    return (
      <div className='container' style={{margin:'auto', padding:'20', height: height}}>
      <Chrono
        cardHeight={0.1*height}
        items={items}
        mode="VERTICAL_ALTERNATING"
      />
    </div>
  




        // <div className='container'>
        //   <h3 style={{textAlign:'left'}}>Experience: </h3>
        //   <div className='container' style={{marginTop:20}}>
        //   <ListGroup variant="flush" >
        //     <ListGroup.Item>Incoming Microsoft Data Science Intern</ListGroup.Item>
        //     <ListGroup.Item>Incoming Quant Researcher Voloridge Asset Management</ListGroup.Item>
        //     <ListGroup.Item>Mathematical machine learning theory</ListGroup.Item>
        //     <ListGroup.Item>Machine learning</ListGroup.Item>
        //     <ListGroup.Item>Computer Architecure</ListGroup.Item>
        // </ListGroup><br/>
        //   <Spinner style={{marginLeft:20}} animation="border" size="sm" />
        //   <Spinner animation="border" />
        //   </div>
        //   <br/>

        // </div>
    );
};