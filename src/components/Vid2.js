import React from 'react'
import "./Vid.css";
import Vid3 from '../components/Vid3';
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
    <div className="Vide">
        <section>
        <div className="highlight1 reveal">
    
        {/* <Vid3 className='robo'/> */}
        <div className="backi"><img src="./ideaback.jpg" alt="" /></div>
        <div className="roh1"><h1>IDEATHON</h1>
        <p>Turn your ideas into reality by participating in Ideathon.
Collaborate with like-minded individuals to create innovative solutions to the given  problem.
Develop your skills in project management, communication, and problem-solving by participating in this 24 hour long challenge!</p>
        </div>
        
     
        
        
        </div>
        </section>
        <section>
        <div className="highlight2 reveal">
        {/* <Vid3 className='robo'/> */}
        <div className="backi2"><img src="./ideaback.jpg" alt="" /></div>

        <div className="roh2"><h1>MATRIX</h1>
        <p>Matrix is an exciting competition that challenges participant's proficiency in various areas of computer science. 
Matrix offers opportunities for programmers of all level to test their abilities and compete against their peers.
So, gear up for the challenge and register for Matrix today!</p>
       </div>
        </div>
        </section>
        <section>
        <div className="highlight3 reveal">
        {/* <Vid3 className='robo'/> */}
        <div className="backi"><img src="./ideaback.jpg" alt=""/></div>
        <div className="roh3"><h1>ARCHATHON</h1>
        <p>Get involved in Archathon and transform your ideas into reality.
This event provides a chance to every architecture student to showcase their creativity, innovation, and skills in architecture.
Grab your opportunity to be a part of the 24 hour long design competition!</p>
       </div>
        </div>
        </section>
     
           </div>
  )
}
