import "./Navbar.css";
import { FiArrowUpRight, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {

    const [ toggle,setToggle ] = useState(false);
    const handleToggle=()=>{
        return setToggle(!toggle);
    }
    return ( <div className="Navbar">
    <div className="tog" onClick={handleToggle}>{toggle ? <MdClose  size={50}/>:<FiMenu size={50} />}</div>

     <div className={`buttons ${toggle ? "Buttons" : "nobut"}`} >

        <button className="simbut1" >home</button>
        <button className="signbut" >Sign In</button>
        <button className="simbut2" >Event</button>
        <button className="simbut3" >Contact</button>
        </div>
    </div> );
}

 
export default Navbar;