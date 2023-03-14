import {React,useState} from 'react'
import './Workshop.css'
import elektra from '../Assets/elektra.jpeg'
import { AiOutlineClose } from "react-icons/ai";

const Talks = () => {
    const [item1, setItem1] = useState(null);
    const [item2, setItem2] = useState(null);



    const handleItem = (item1, item2) => {
        setItem1(item1);
        setItem2(item2);
    }

    let content = [
        {
            image1:elektra,
            title: "expo",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: elektra,
            title: "ELEKTRA",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        },
        {
            image1: elektra,
            title: "INFINOIA",
            date: "31/10/2001",
            link: "www.google.com",
            cost: "RS 499/-",
            learn: "http://iste.gectcr.ac.in/"
        },
      
        
    ];
    const [showDiv, setShowDiv] = useState(false);

    const handleOpen = () => {
        setShowDiv(true);
        document.getElementById("nav").style.display = showDiv ? "flex" : "none";
    };
    const handleClose = () => {
        setShowDiv(false);
        document.getElementById("nav").style.display = showDiv ? "flex" : "none";
    }
    return (

        <div className="event" >

            <div className="sheet" >
                <div className="workhead" ><h1 style={{ color: 'aqua', fontSize: '4vw',fontWeight:'800', fontFamily: 'poppins' }}>Talks & Expo</h1></div>

                <div className="innersheet" id="card1" >

                    {content.map((element) => (
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

    );
}

export default Talks;