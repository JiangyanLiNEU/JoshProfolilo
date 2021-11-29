import {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import { YoutubeEmbed } from './YoutubeEmbed';

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <YoutubeEmbed src="https://www.youtube.com/embed/bEKgblPnv2M"/>
        <Carousel.Caption>
          <h3 style={{backgroundColor:'#a9def9', fontWeight:'bold'}}>recorded lectures on Youtube</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <YoutubeEmbed src="https://www.youtube.com/embed/gnNTuO_f_Y0"/>

        <Carousel.Caption>
          <h3 style={{backgroundColor:'#a9def9',fontWeight:'bold'}}>Find more on my channel...</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
};