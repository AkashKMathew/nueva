import React from "react";
import "./Scrollanimation.css";
import { useState, useEffect } from "react";

let Scrollanimation = () => {
  const size = useWindowSize();
  let { width } = size;
  let nueva_count = Math.floor(width / 54 / 2);
  // function reveal() {
  //   var reveals = document.querySelectorAll(".reveal");
  
  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals[i].getBoundingClientRect().top;
  //     var elementVisible = 150;
  
  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add("active");
  //     } else {
  //       reveals[i].classList.remove("active");
  //     }
  //   }
  // }
  
  // window.addEventListener("scroll", reveal);
  /* {nueva_count > 0 &&
    Array(nueva_count)
      .fill(0)
      .map((e) => {
        return (
          <>
            <p className="animation_letter dark">NUEVA</p>
            <p className="animation_letter light">NUEVA</p>
          </>
        );
      })} */
  return (
    <div class="marquee_container =">
      <div class="marquee primary">
        {nueva_count > 0 &&
          Array(nueva_count)
            .fill(0)
            .map((e) => {
              return (
                <>
                  <p className="animation_letter dark">NUEVA</p>
                  <p className="animation_letter light">NUEVA</p>
                </>
              );
            })}
      </div>
      <div class="marquee secondary">
        {nueva_count > 0 &&
          Array(nueva_count)
            .fill(0)
            .map((e) => {
              return (
                <>
                  <p className="animation_letter dark">NUEVA</p>
                  <p className="animation_letter light">NUEVA</p>
                </>
              );
            })}
      </div>
    </div>
  );
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Scrollanimation;
