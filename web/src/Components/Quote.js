import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {ButtonGroup} from 'react-bootstrap';
export const Quote =  () => {
    const [content, setcontent] = useState("People always display smart sentences on their homepages.  Click the button below to get unlimited smart quotes randomly selected by Google. If you are interested in learning 中文, click the translate button :)");
    const [edition, setedition] = useState('English');
    const [buttonContent, setbuttonContent] = useState('中文');
    const [intro, setintro] = useState(<span>I am a second year graduate student at UCLA interested in <span style={{color:'#9fa0ff', fontWeight:'bolder'}}>algebraic geometry</span> and <span style={{color:'#9fa0ff', fontWeight:'bolder'}}>deep learning theory</span>.</span>);
    const [showIntro, setshowIntro] = useState(true);
    
    // let count= 0;

    const handleClick = async () => {
        // if (count===0){
            setshowIntro(false);
        //     count=1;
        // }else{
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
        // }
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
    const handleAbout = () => {
        setshowIntro(true);
    }

    // const content = response.ok ? data.content : 'Sorry my api is not working well! I will fix it ASAP! '
    return (
        <div>
            <div id='quoteContent' className='container' >
            {(showIntro && intro) || (content)}
            </div>
            <br/>
            <div className='container'>
            <ButtonGroup className="mb-2">
            <Button id='quoteBtn' onClick={handleAbout} variant="outline-primary" style={{fontWeight:'bold'}}>About me</Button>{' '}
            <Button id='quoteBtn' onClick={handleClick} variant="outline-primary" style={{fontWeight:'bold'}}>Quote (double click)</Button>{' '}
            <Button id='quoteBtn' onClick={translate} variant="outline-primary" style={{fontWeight:'bold'}}>{buttonContent}</Button>{' '}
            </ButtonGroup>
            </div>
            
        </div>
    )
};