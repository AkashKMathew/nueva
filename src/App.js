import React,{useState} from "react";
import "./App.css";
// import Tag from "./components/Tag";
import Hover from "./components/Hover";
import About from "./components/About";
import Footer from "./components/Footer";
import Scrollanimation from "./components/Scrollanimation";
import Gevents from "./components/Gevents";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import Vid1 from "./components/Vid1";
import Vid2 from "./components/Vid2";
function App() {
 const[loading,setloading]=useState(false);
 const spinner=document.getElementById('spinner');
 if(spinner){
   setTimeout(()=>{
        spinner.style.display='none';
        setloading(true);
   },2000)
 }

  return (
     loading &&
(  
      <div className="app">
            
          
              
                 <Navbar />
                <Hover />
               
                <About />
             
                
                
                <Gevents/>
                
                <Vid1 />
           
                <Download />
               
                <Vid2 />
              
                <Scrollanimation />
                
                <Footer />
               
             
              
            
          

          
      </div>
)
  );
}

export default App;
