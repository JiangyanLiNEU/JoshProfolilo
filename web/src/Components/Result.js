import { Carousel } from "react-bootstrap"
import a from '../img/experienment1/1.png';
import b from '../img/experienment1/2.png';
import c from '../img/experienment1/1.png';
import d from '../img/experienment1/2.png';
import e from '../img/experienment1/1.png';
import f from '../img/experienment1/2.png';
import g from '../img/experienment1/1.png';
import h from '../img/experienment1/2.png';
import i from '../img/experienment1/1.png';
import j from '../img/experienment1/2.png';
import k from '../img/experienment1/1.png';
import l from '../img/experienment1/2.png';
import m from '../img/experienment1/1.png';
import n from '../img/experienment1/2.png';
import o from '../img/experienment1/1.png';
import p from '../img/experienment1/2.png';
import q from '../img/experienment1/1.png';
import r from '../img/experienment1/2.png';
import s from '../img/experienment1/1.png';
import t from '../img/experienment1/2.png';
import u from '../img/experienment1/1.png';
import v from '../img/experienment1/2.png';
import w from '../img/experienment1/1.png';
import x from '../img/experienment1/2.png';

export const Result = () => {
     const imgs = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x]
     const height = window.innerHeight;
     const width = window.innerWidth;
     const backgroundStyle = ele =>{
          return (
               {
          backgroundImage:`url(${ele})`,
          backgroundPosition:'center',
          backgroundSize:'contain',
          backgroundRepeat:'no-repeat',
          width:width*0.8+'px',  
          height:height*0.7+"px"
     }
          )
     } 
     const createDiv = (ele) => {
          return <div style={backgroundStyle(ele)}></div>
     }
     const createEle = (ele) => {
          return (
               <Carousel.Item style={{width:width*0.8+'px', marginLeft:width*0.1+'px', height:height*0.8+"px"}}>
                    {createDiv(ele)}
                    
               </Carousel.Item>
          )
     }

     return (
          <div>
               <div style={{ padding:'10px', textAlign:'center', marginTop:''}}>
                    <h3>
                         Reconstruction Error v. latent dimension for synthetic manifolds
                    </h3>
               </div>
               <Carousel variant="dark" style={{margin:'auto'}}>
                    {imgs.map(ele => createEle(ele))}
               </Carousel>
          </div>
     )
}