import React,{useState} from 'react';
import './Gevents.css';
import Workshop from './Workshop';
import Event from './Event';
import Talks from './Talks'
import { AiOutlineClose } from "react-icons/ai";
export default function Gevents() {
 const[openWorkshop,setWorkshop]=useState(false);
 const[openTalks,setTalks]=useState(false);
 const[openEvent,setEvent]=useState(false);
 const[openComp,setComp]=useState(false);
 const handleWork =()=>{
  return setWorkshop(!openWorkshop);
 }
 const handleTalks =()=>{
  return setTalks(!openTalks);
 }
 const handleEvent =()=>{
  return setEvent(!openEvent);
 }


  return (
    <div className={`Gevents ${openComp ? "showGevents" : "hideGevents"}`} >
        <div className="col">
            <div className="row1">
            
                <div className='heading1'>WHAT'S <div className='headingimg'></div><span className='headingcontent'>IN</span><br/>STORE</div>
            </div>
            <div className="row2">
            <div className='one' >
            <button className='overlayimg' onClick={()=>{setWorkshop(true);setTalks(false);setEvent(false);setComp(true)}}>WORKSHOP</button></div>
            
            <div className='two'>
            <button className='overlayimg' onClick={()=>{setWorkshop(false);setTalks(false);setEvent(true);setComp(true)}}>EVENT</button></div>
            
            <div className='three'>
              <button className='overlayimg' onClick={()=>{setWorkshop(false);setTalks(true);setEvent(false);setComp(true)}}>TALKS</button></div>
            
            </div>
            <div className="cardo">
            <div className={`works ${openWorkshop ? "showworks" : "hideworks"}`}>
              <button onClick={()=>{handleWork();setComp(false);}} className="cloose"><AiOutlineClose size={40}/></button>
              <Workshop />
            </div>
            <div className={`evento ${openEvent ? "showevento" : ""}`}>
            <button onClick={()=>{ handleEvent();setComp(false);}} className="cloose"><AiOutlineClose size={40}/></button>
              <Event />
            </div>
            <div className={`evento ${openTalks ? "showevento" : ""}`}>
            <button onClick={()=>{handleTalks();setComp(false);}} className="cloose"><AiOutlineClose size={40} /></button>
              <Talks />
            </div>
            </div>
        </div>
    </div>
  )
}