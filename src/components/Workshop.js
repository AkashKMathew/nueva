import React from 'react'
import './Workshop.css'
import elektra from '../Assets/elektra.jpeg'

const Event = () => {

let content=[
    {
        image: elektra,
        title: "KRANTHI",
        date : "31/10/2001",
        link : "www.google.com",
        cost : "RS 499/-",
        learn: "http://iste.gectcr.ac.in/"
    },
    {
        image: elektra,
        title: "ELEKTRA",
        date : "31/10/2001",
        link : "www.google.com",
        cost : "RS 499/-",
        learn: "http://iste.gectcr.ac.in/"
    },
    {
        image: elektra,
        title: "INFINOIA",
        date : "31/10/2001",
        link : "www.google.com",
        cost : "RS 499/-",
        learn: "http://iste.gectcr.ac.in/"
    },
    {
        image: elektra,
        title: "LETO",
        date : "31/10/2001",
        link : "www.google.com",
        cost : "RS 499/-",
        learn: "http://iste.gectcr.ac.in/"
    },
    {
        image: elektra,
        title: "LETO",
        date : "31/10/2001",
        link : "www.google.com",
        cost : "RS 499/-",
        learn: "http://iste.gectcr.ac.in/"
    }
];
    return (
           
<div className="event">
    <div className="sheet">
        <div className="innersheet">
        <h1 style={{color:'white',fontSize:'9vw',fontFamily: 'Chakra Petch'}}>Workshops</h1>

    {content.map((element,ctx) => (
        <div className="card">
            <div className="mainhead"><h1 className='head'>{element.title}</h1><p>{element.date}</p></div>
        <img src={element.image} alt="" className='imag' />
        <h2 className="head3">{element.cost}</h2>
        <div className="comb"><div className="reg1">
            <div className="reg2"><p>Register</p></div>
        </div> <a href="https://www.figma.com/file/3RdcXNnmwRiOXmzsZDb8RW/ISTE-GECT?node-id=0%3A1&t=sKz1JXpa45GG4ftX-0">LEARN MORE</a></div>
            </div>
      ))}
   </div>
    </div>
 
</div> 

);
}
 
export default Event;