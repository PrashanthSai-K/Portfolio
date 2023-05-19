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
              I'm a results-driven full-stack web developer with a strong
              background in AWS hosting and Docker. Leveraging my skills in
              cloud computing and containerization, I deliver efficient and cost
              effective web solutions that meet clients' unique needs and exceed
              their expectations.Passionate about staying up to date with the
              latest advancements in cloud computing and containerization, I
              constantly expand my skill set to ensure that my clients benefit
              from cutting-edge technologies.
            </div>
            <div className="about-rightContent">
              <div className="details">
                <li className="left">Name :</li>
                <li>Sai Prashanth K</li>
              </div>
              <div className="details">
                <li className="left">Email :</li>
                <li style={{ color: "#33c9ce" }}>
                  saiprashanth.cs21@bitsathy.ac.in
                </li>
              </div>
              <div className="details">
                <li className="left">Age :</li>
                <li>22</li>
              </div>
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
                <li>React</li>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: " 80%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
                <li>Laravel</li>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: " 80%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
                <li>Node.js</li>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: " 70%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
                <li>MySQL</li>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: " 60%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
                <li>MongoDB</li>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: " 60%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
                <li>AWS</li>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: " 40%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-card">
                <li>Docker</li>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
