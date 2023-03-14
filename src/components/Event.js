import {React, useState} from 'react'
import './Workshop.css'

import ideathon from '../Assets/Eposters/ideathon.jpg'
import ideaguide from '../Assets/Eposters/ideaguide.jpg'
import arcane from '../Assets/Eposters/arcane.jpg'
import arcaneguide from '../Assets/Eposters/arcaneguide.png'
import curiosita from '../Assets/Eposters/curiosita.png'
import curiositaguide from '../Assets/Eposters/curiositaguide.png'
import shipwreck from '../Assets/Eposters/shipwreck.png'
import shipwreckguide from '../Assets/Eposters/shipwreckguide.png'
import murder from '../Assets/Eposters/murder.png'
import murderguide from '../Assets/Eposters/murderguide.png'


//department events
import cado from '../Assets/Eposters/cado.jpg';
import  cadoguide from '../Assets/Eposters/cadoguide.jpg' ;
import puzzled from '../Assets/Eposters/puzzled.jpg';
import  puzzledguide from '../Assets/Eposters/puzzledguide.jpg' ;
import avenir from '../Assets/Eposters/avenir.png';
import  avenirguide from '../Assets/Eposters/avenirguide.png' ;
import electrifix from '../Assets/Eposters/electrifix.png';
import electriguide from '../Assets/Eposters/electriguide.jpg';
import trivia from '../Assets/Eposters/trivia.png';
import trivguide from '../Assets/Eposters/trivguide.jpg';
import chem from '../Assets/Eposters/chem.jpg';
import chemguide from '../Assets/Eposters/chemguide.jpg';
import crack from '../Assets/Eposters/crack.jpg';
import craguide from '../Assets/Eposters/craguide.jpg'
import bidandbuild from '../Assets/Eposters/bidandbuild.png';
import bidandbuildguide from '../Assets/Eposters/bidandbuildguide.png'
import lollapalooza from '../Assets/Eposters/lollapalooza.png';
import lollapaloozaguide from '../Assets/Eposters/lollapaloozaguide.png'
import pictionary from '../Assets/Eposters/pictionary.png';
import pictionaryguide from '../Assets/Eposters/pictionaryguide.png'
import quickescape from '../Assets/Eposters/quickescape.jpg';
import quickescapeguide from '../Assets/Eposters/quickescapeguide.png'
import tagaboo from '../Assets/Eposters/tagaboo.jpg';
import tagabooguide from '../Assets/Eposters/tagabooguide.png'
import robowar from '../Assets/Eposters/robowar.jpg';
import robowarguide from '../Assets/Eposters/robowarguide.jpg'
import matrix from '../Assets/Eposters/matrix.png';
import matrixguide from '../Assets/Eposters/matrixguide.png'

import laser from '../Assets/Eposters/laser.jpg'
import lasorguide from '../Assets/Eposters/lasorguide.png'
import archathon from '../Assets/Eposters/archathon.jpg'
import archguide from '../Assets/Eposters/archguide.jpg'
import soapitup from '../Assets/Eposters/soapitup.jpg';
import soapitupguide from '../Assets/Eposters/soapitupguide.jpg'
import wannabees from '../Assets/Eposters/wannabees.jpg';
import wannabeesguide from '../Assets/Eposters/wannabeesguide.png'
import { AiOutlineClose } from "react-icons/ai";



const Event = () => {
    const [item1, setItem1] = useState(null);
    const [item2, setItem2] = useState(null);



    const handleItem = (item1, item2) => {
        setItem1(item1);
        setItem2(item2);
    }

    let content1 = [
        {
            image1: ideathon,
            image2: ideaguide,
            title: "IDEATHON",
            date: "26/03/23",
            cost:"Under delegate pass",
            link: "https://www.yepdesk.com/ideathon-nueva",
          
        },
        {
            image1: arcane,
            image2: arcaneguide,
            title: "ARCANE",
            cost:"Under delegate pass",
            date: "26/03/23",
            link: "https://www.yepdesk.com/tressure-hunt",
          
        },
        {
            image1: curiosita,
            image2: curiositaguide,
            title: "CURIOSITA",
            date: "26/03/23",
            cost:"Under delegate pass",
            link: "https://www.yepdesk.com/general-quiz4",
          
        },
        {
            image1: shipwreck,
            image2: shipwreckguide,
            title: "SHIPWRECK",
            date: "25/03/23",
            cost:"Under delegate pass",
            link: "https://www.yepdesk.com/shipwreck",
          
        },
        {
            image1: murder,
            image2: murderguide,
            title: "WHODUNNIT",
            date: "26/03/23",
            cost:"Under delegate pass",
            link: "https://www.yepdesk.com/murder-mystery",
          
        },
        
       
    ];

    let content2 = [
        {
            image1: cado,
            image2: cadoguide,
            title: "CADOBLAST",
            date: "25/03/23",
            link: "https://www.yepdesk.com/cadoblast",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: puzzled,
            image2: puzzledguide,
            title: "PUZZLED",
            date: "26/03/23",
            link: "https://www.yepdesk.com/puzzled",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: avenir,
            image2: avenirguide,
            title: "AVENIR",
            date: "25/03/23",
            link: "https://www.yepdesk.com/avenir",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },{
            image1: electrifix,
            image2: electriguide,
            title: "ELECTRIFIX",
            date: "26/03/23",
            link: "https://www.yepdesk.com/electrifix1",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: trivia,
            image2:trivguide,
            title: "SCI-FI TRIVIA",
            date: "25/03/23",
            link: "https://www.yepdesk.com/sci-fi-trivia",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: crack,
            image2: craguide,
            title: "CRACK WITH CHEM",
            date: "25/03/23",
            link: "https://www.yepdesk.com/crack-with-chem",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: chem,
            image2: chemguide,
            title: "SILVER TONGUED",
            date: "26/03/23",
            link: "https://www.yepdesk.com/silver-tongue",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: bidandbuild,
            image2:  bidandbuildguide,
            title: "BID AND BUILD",
            date: "26/03/23",
            link: "https://www.yepdesk.com/bid-and-build",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: lollapalooza,
            image2:  lollapaloozaguide,
            title: "LOLLAPALOOZA",
            date: "25/03/23-26/03/23",
            link: "https://www.yepdesk.com/lollapalooza",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: pictionary,
            image2:  pictionaryguide,
            title: "PICTIONARY",
            date: "25/03/23-26/03/23",
            link: "https://www.yepdesk.com/pictionary",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: quickescape,
            image2:  quickescapeguide,
            title: "QUICK ESCAPE",
            date: "25/03/23",
            link: "https://www.yepdesk.com/musical-groove-quick-escape",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: tagaboo,
            image2:  tagabooguide,
            title: "TAGABOO",
            date: "25/03/23-26/03/23",
            link: "https://www.yepdesk.com/tagaboo",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: laser,
            image2:lasorguide,
            title: "LASER MAZE",
            date: "25/03/23-26/03/23",
            link: "https://www.yepdesk.com/laser-maze1",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: archathon,
            image2:archguide,
            title: "ARCHATHON",
            date: "25/03/23-26/03/23",
            link: "https://www.yepdesk.com/archathon",
            cost: "500/- per team",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: soapitup,
            image2:  soapitupguide,
            title: "SOAP IT UP",
            date: "26/03/23",
            link: "https://www.yepdesk.com/soap-it-up",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: wannabees,
            image2:  wannabeesguide,
            title: "WANNABEES",
            date: "26/03/23",
            link: "https://www.yepdesk.com/wannabees",
            cost: "Under delegate pass",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: robowar,
            image2:  robowarguide,
            title: "ADHEERA",
            date: "25/03/23",
            link: "https://www.yepdesk.com/adheera-robowar",
            cost: "500/- per team",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: matrix,
            image2:  matrixguide,
            title: "ADHEERA",
            date: "25/03/23-26/03/23",
            link: "https://www.yepdesk.com/embed/matrix",
            cost: "300/- per team",
            learn: "http://iste.gectcr.ac.in/"
        },
    ];

    const [showDiv, setShowDiv] = useState(false);
    const [genEve , setGenEve ] = useState(true);
    const [deptEve , setDeptEve ] = useState(false);
    

    const handleOpen = () => {
        setShowDiv(true);
        document.getElementById("nav").style.display = showDiv ? "flex" : "none";
    };const handleClose = () => {
        setShowDiv(false);
        document.getElementById("nav").style.display = showDiv ? "flex" : "none";
    }
    

    return(
        <div className="event">
            <div className="sheet">
            <div className="tabs">
                        <button className={`tabrl ${genEve? "tab1": "tab-nockeck1"}`} onClick={()=>{setGenEve(true);setDeptEve(false)}}><h1>GENERAL</h1></button>
                        <button className={`tabrl ${deptEve? "tab1": "tab-nockeck1"}`} onClick={()=>{setGenEve(false);setDeptEve(true)}}><h1>DEPARTMENT</h1></button>
                    </div>
                    <div className={`tabopen ${genEve? "tabopen1": "tabclose1"}`}>
                        <div className="innersheet" id='card1'>
                        {content1.map((element, ctx) => (
                        <>
                        <div className="card">
                            <div className="mainhead">
                                <h1 className='headin'>{element.title}</h1>
                            </div>
                            <div className="feat"><img src={element.image1} alt="" className='imag' />
                            </div>
                            <h2 className="head3">{element.cost}</h2>
                            <div className="combin">
                            <div className="comb">
                                <div className="reg1">
                                    <div className="reg2">
                                        <a href={element.link}>Register</a>
                                    </div>
                                </div>
                                
                                </div>
                                <div className="datanddet"><p>{element.date}</p></div>
                                </div>
                                <div className="learnbut"><button onClick={() => { handleOpen(); handleItem(element.image1, element.image2); }}>LEARN MORE</button></div>

                            </div>
                            {showDiv && <div className='cardDoc' onClick={handleClose}>
                        <button className='btn' onClick={handleClose}><AiOutlineClose size={40}/></button>
                            <div className="cardContain">
                            
                                <div className="front">
                                    <img src={item1} alt=""></img>
                                </div>
                                <div className='back'>
                                <img src={item2} alt=""></img>
                                </div>
                            </div>
                            </div>}
                        </>
                    ))}
                        </div>
                    </div>
                    <div className={`tabopen ${deptEve? "tabopen1": "tabclose1"}`}>
                    <div className="innersheet" id='card1'>
                        {content2.map((element, ctx) => (
                        <>
                        <div className="card">
                            <div className="mainhead">
                                <h1 className='headin'>{element.title}</h1>
                            </div>
                            <div className="feat"><img src={element.image1} alt="" className='imag' />
                            
                            </div>
                            <h2 className="head3">{element.cost}</h2>
                            <div className="combin">
                            <div className="comb">
                            <div className="reg1">
                           <div className="reg2">
                           <a href={element.link}>Register</a>
                                    </div> 
                                </div>
                              
                                </div>
                                <div className="datanddet"><p>{element.date}</p></div>
                                </div>
                                <div className="learnbut"><button onClick={() => { handleOpen(); handleItem(element.image1, element.image2); }}>LEARN MORE</button></div>

                            </div>
                            {showDiv && <div className='cardDoc' onClick={handleClose}>
                        <button className='btn' onClick={handleClose}><AiOutlineClose size={40}/></button>
                            <div className="cardContain">
                            
                                <div className="front">
                                    <img src={item1} alt=""></img>
                                </div>
                                <div className='back'>
                                <img src={item2} alt=""></img>
                                </div>
                            </div>
                            </div>}
                        </>
                    ))}
                        </div>
                    </div>
            </div>
        </div>
    )



}

    export default Event;
