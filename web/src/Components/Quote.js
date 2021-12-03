import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {Row, Col} from 'react-bootstrap';
export const Quote =  () => {
    const [content, setcontent] = useState("Displaying a smart sentence in homepage seems like neccessary, so click the button below to get unlimited random smart quotes. click the translate button if you are interested in 中文 :) ");
    const [edition, setedition] = useState('English');
    const [buttonContent, setbuttonContent] = useState('翻译成中文');
    
    const handleClick = async () => {
        try{
            const response = await fetch("https://api.quotable.io/random", {"method": "GET"})
        
            if (response.ok){
                const data = await response.json();
                setcontent(data.content);
            }else{
                setcontent('Oops, my fetch API is not working.. I will fix it ASAP!')
            }
        }catch{
            setcontent('Oops, my fetch API is not working.. I will fix it ASAP!')
        }
        
    }
    
    
    const translate = async() => {
        if (edition==='English'){
            setedition('Chinese');
            setcontent('大概率很少人能读中文， 我就随便写写， 主要原因是谷歌的翻译api不免费， 万一很多人来看我的网站一直按翻译，很贵的！');
        }else{
            setedition('English');
            setbuttonContent("翻译成中文");
        };

    };

    // const content = response.ok ? data.content : 'Sorry my api is not working well! I will fix it ASAP! '
    return (
        <div>
            <div id='quoteContent' className='container' >
            {content}
            </div>
            <br/>
            <div className='container'>
            <Row>
            <Col><Button id='quoteBtn' onClick={() => handleClick()} variant="outline-primary" style={{fontWeight:'bold'}}>Get a quote</Button>{' '}</Col>
            <Col><Button id='quoteBtn' onClick={() => translate()} variant="outline-primary" style={{fontWeight:'bold'}}>{buttonContent}</Button>{' '}</Col>
            </Row></div>
        </div>
    )
};