import React, { useState, useEffect } from "react";
import "../css/project.css";
import axios from "axios";
// import portfolio from '../assets/protfoliosite.png';

const Project = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const resp = await axios
      .get("https://portfolio-9k9g.onrender.com/api/projects")
      .catch((err) => console.log(err));
    setData(resp.data);
  }
  useEffect(() => {
    fetchData();
  }, [setData]);

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
                      {project.name}
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
