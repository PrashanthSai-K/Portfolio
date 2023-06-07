import React from "react";
import { useEffect, useState } from "react";
import "../css/team.css";
import axios from "axios";

const Team = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios.get("http://localhost:5000/api/team");
        setData(resp.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {data.length === 0  ? console.log("No data") : (
        <section id="myteam">
          <div className="team-container">
            <div className="team-heading">
              My Team
              <div className="underscore"></div>
            </div>
            <div className="team-cards">
              {data.map((datas) => {
                return (
                  <div className="team-card" key={datas._id}>
                    <img src={datas.image} alt="" className="team-image" />
                    <div className="team-name">{datas.name}</div>
                    <div className="team-designation">{datas.designation}</div>
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

export default Team;
