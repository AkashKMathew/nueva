import "./Footer.css"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const style = {  width:'4vw',height:'4vw',fill:"aqua"}
    // function reveala() {
    //     var reveals = document.querySelectorAll(".reveala");
      
    //     for (var i = 0; i < reveals.length; i++) {
    //       var windowHeight = window.innerHeight;
    //       var elementTop = reveals[i].getBoundingClientRect().top;
    //       var elementVisible = 150;
      
    //       if (elementTop < windowHeight - elementVisible) {
    //         reveals[i].classList.add("activee");
    //       } else {
    //         reveals[i].classList.remove("activee");
    //       }
    //     }
    //   }
      
    //   window.addEventListener("scroll", reveala);

    return ( <div className="footer">
        <div className="left">
    <div className="left_up">
    <div className="neuva"><h2>CALL FOR SPONSORS</h2><br/>
    <div className="lco">Contact Us: +91 8139887001 ,+91 9495577034</div></div>
    </div>
    <hr />
    <div className="left_down">
        <div className="head">
        <div className="logo">
            <img src="./logo.png" alt="" className="1" />
        </div>
        <div className="neuva"><h2>nueva</h2></div>
    </div>
        </div></div>
        <img src="./Arrow 1.svg" alt="" className="arrow" />
        <div className="right">
            <div className="right_up">
                <h2>GET IN TOUCH</h2>
                <a href="http://iste.gectcr.ac.in/">iste@gect.com</a>
            </div>
            <hr className="a2" />
            <div className="social">
                <h2>SOCIAL LINKS</h2>
                <div className="icons">
                    <a href="https://www.instagram.com/iste_gect/"><FaInstagramSquare  style={style} className="icon"/></a>
                    <a href="https://www.linkedin.com/company/iste-gec-students-chapter/"><FaLinkedin  style={style}/></a>
                    <a href="https://www.facebook.com/IsteGecChapter"><FaFacebookSquare  style={style}/></a></div>
            </div>

        </div>

    </div> );
}
 
export default Footer;