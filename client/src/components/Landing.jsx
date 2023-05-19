import React from "react";
import { useEffect } from "react";
import "../css/landing.css";

const Landing = () => {
  const texts = ["I am Sai Prashanth K!"];
  let index = 0;
  let textIndex = 0;

  function typeText() {
    if (index < texts[textIndex].length) {
      document.getElementById("typed-text").textContent +=
        texts[textIndex].charAt(index);
      index++;
      setTimeout(typeText, 100);
    } else {
      setTimeout(deleteText, 1000);
    }
  }

  function deleteText() {
    if (index >= 0) {
      let typedText = document.getElementById("typed-text").textContent;
      document.getElementById("typed-text").textContent = typedText.slice(
        0,
        -1
      );
      index--;
      setTimeout(deleteText, 50);
    } else {
      index = 0;
      setTimeout(typeText, 500);
    }
  }

  useEffect(() => {
    typeText();
  });

  return (
    <>
      <div className="landing-container">
        <div className="landing-textContainer">
          <div className="text-first">Welcome!!</div>

          <div className="text-container">
            <span id="typed-text"></span>
          </div>
          <div className="designation">Full Stack Web Developer</div>
          <pre>&lt;/&gt;</pre>
          <button className="hire-button hire-button-2">Hire Me</button>
        </div>
        <div className="svg-container">
          <img src="./blob.png" alt="" />
        </div>
        <div className="scroll-down">
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="plusbg1"><img src="./plusbg.png" alt="" /></div>
        <div className="roundbg1"><img src="./roundbg.png" alt="" /></div>
        <div className="plusbg2"><img src="./plusbg.png" alt="" /></div>
        <div className="roundbg2"><img src="./roundbg.png" alt="" /></div>
      </div>
     
    </>
  );
};

export default Landing;
