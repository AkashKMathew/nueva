import React from 'react'
import "./Vid.css";
import "./vid1.css";
// import laservideo from '../Assets/laser.webm'
// import Vid3 from '../components/Vid3';
// import roboBg from "../Assets/background.png"
import roboleft from "../Assets/roboLeft.png"
import roboright from "../Assets/roboRight.png"
import robomid from "../Assets/roboMid.png"
import man from "../Assets/lazer1.png";
import ship from "../Assets/lazer2.png";

export default function Vid() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  return (
    <div className="Vid reveal">
      <div className='roboAnim'>
        <div className='bg'>
        <h1>ROBOWAR</h1>
        <h2 className="prize reveal">Prize pool<br></br>30K</h2>
        </div>
        <div className='robots'>
          
        <img className="robo1 reveal" src={roboleft} alt=''></img>
        <img className="robo2 reveal" src={robomid} alt=''></img>
        <img className="robo3 reveal" src={roboright} alt=''></img>
        </div>
      </div>
      <div className='roboAnim1'>
        <div className='bg1'>
        <h1>LASER MAZE</h1>
        </div>
        <div className='robots'>
          
        <img className="ship reveal" src={ship} alt=''></img>
        <img className="man reveal" src={man} alt=''></img>
        </div>
      </div>
        {/* <div className="highlight1 reveal">
      
        <div className="roh1"><h1>ROBOWAR</h1>
        <p>Witness the clash of robots as they battle it out to be the last one standing.
Unleash your engineering skills and create the ultimate bot for the Robowar competition to dominate the battlefield. 
Join us to experience the excitement and adrenaline rush of Robowar!</p>
        </div>
        
        
        
        </div>
        
        <div className="highlight2 reveal">
        <div className="roh2"><h1>LAZERMAZE</h1>
        <p>Get ready to experience the ultimate test of agility and strategy - the Laser Maze competition!
Navigate through a maze of laser beams and avoid getting hit to emerge as the champion.
Join us for a rousing event filled with excitement and adventure!</p>
       </div>
        </div> */}
     
           </div>
  )
}
