import React from "react";
import "../css/about.css";

const About = () => {


  return (
    <>
      <div className="about-container">
        <section id="aboutme">
          <div className="about-heading">
            Know Me More<div className="underscore"></div>
          </div>
          <div className="about-content">
            <div className="about-leftContent">
              <h2 className="left-name">
                I am <span>Sai Prashanth K</span> , Full Stack Web Developer
              </h2>
              <br />
              As a dedicated Full Stack Developer, I excel in delivering products that prioritize exceptional user experience and robust security. My expertise in containerizing applications ensures seamless and efficient deployment processes.My commitment to continuous learning drives me to further enhance my skills in CI/CD and cloud computing, with a particular focus on Jenkins and AWS. I am passionate about leveraging these technologies to streamline development workflows, automate deployment pipelines, and optimize cloud infrastructure for scalability and performance. Through my comprehensive approach, I aim to provide innovative solutions that meet and exceed user expectations while maintaining the highest standards of security and reliability.
            </div>
            <div className="about-rightContent">
              <div className="details">
                <li className="left">Name :</li>
                <li>Sai Prashanth K</li>
              </div>
              <div className="details">
                <li className="left">E-mail :</li>
                <li style={{ color: "#33c9ce" }}>
                  saiprashanth.cs21@bitsathy.ac.in
                </li>
              </div>
              {/* <div className="details">
                <li className="left">Github :</li>
                <li>22</li>
              </div> */}
              <div className="details">
                <li className="left">From :</li>
                <li className="right">BIT, Sathy</li>
              </div>
            </div>
          </div>
        </section>
        <section id="myskills">
          <div className="skills-container">
            <div className="skills-heading">
              My Skills<div className="underscore"></div>
            </div>
            <div className="skills-content">
              <div className="skill-card">
                <img src="./react.png" alt="" style={{ width: "70%" }} />
                <li>React</li>
              </div>
              <div className="skill-card">
                <img src="./php.png" alt="" style={{ width: "70%" }} />
                <li>PHP</li>
              </div>
              <div className="skill-card">
                <img src="./nodejs.png" alt="" style={{ width: "70%" }} />
                <li>Node.js</li>
              </div>

              <div className="skill-card">
                <img src="./mysql.png" alt="" style={{ width: "70%" }} />
                <li>MySQL</li>
              </div>
              <div className="skill-card">
                <img
                  src="./mongo.png"
                  alt=""
                  style={{ width: "80%", marginTop: "17%" }}
                />
                <li>MongoDB</li>
              </div>
           {/*   <div className="skill-card">
                <img
                  src="./aws.png"
                  alt=""
                  style={{ width: "90px", marginTop: "17%" }}
                />
                <li>AWS</li>
              </div> */ }
              <div className="skill-card">
                <img src="./docker.png" alt="" style={{ width: "150px" }} />
                <li>Docker</li>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
