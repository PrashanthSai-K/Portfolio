import React, { useState, useEffect } from "react";
import "../css/project.css";
import axios from "axios";
// import portfolio from '../assets/protfoliosite.png';

const Project = () => {
  const [data, setData] = useState([
    {"_id":{"$oid":"647f57a37f6e6bc7b3b26d03"},"name":"Protfolio","description":"Site is a digital platform that showcases my work, skills, and experience.","image":"./profoliosite.png","gitlink":"https://github.com/PrashanthSai-K/portfolio","__v":{"$numberInt":"0"}},
    {"_id":{"$oid":"647f57a37f6e6bc7b3b26d04"},"name":"Lab Dashboard","description":"A Place to showcase labs skills, projects and achievements","image":"./cloudlabsite.png","gitlink":"https://github.com/PrashanthSai-K/Cloudlab-site","__v":{"$numberInt":"0"}},
    {"_id":{"$oid":"647f57a37f6e6bc7b3b26d05"},"name":"E-Learning","description":"Static E-learning site project to explore the capabilities of ReactJS","image":"./coursesite.png","gitlink":"https://github.com/PrashanthSai-K/OnlineCourseSite","__v":{"$numberInt":"0"}},
    {"_id":{"$oid":"647f57a37f6e6bc7b3b26d06"},"name":"Leave Portal","description":"leave application portal for college institutions","image":"./leavesite.png","gitlink":"https://github.com/PrashanthSai-K/LeaveManagementSystem-Laravel","__v":{"$numberInt":"0"}}
  ]);

  // async function fetchData() {
  //   const resp = await axios
  //     .get("https://portfolio-9k9g.onrender.com/api/projects")
  //     .catch((err) => console.log(err));
  //   setData(resp.data);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, [setData]);

  return (
    <>
      {data.length === 0 ? (
        console.log("no data")
      ) : (
        <section id="myprojects">
          <div className="project-container">
            <div className="project-heading">
              Project <div className="underscore"></div>
            </div>
            <div className="grid-container">
              {data.map((project) => {
                return (
                  <div
                    className="grid"
                    style={{ backgroundImage: `url(${project.image})` }}
                    key={project._id}
                  >
                    <div className="grid-link">
                      <div>{project.name}</div>
                      <div style={{fontSize:"12px"}}>{project.description}</div>
                      <a href={project.gitlink} target="blank">
                        View
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Project;
