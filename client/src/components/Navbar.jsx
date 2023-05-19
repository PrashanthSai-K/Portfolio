import React, { useEffect } from "react";
import "../css/navbar.css";

const Navbar = () => {


  if(window.pageYOffset > 10 ){
    document.getElementById("hidden-navbar").classList.add("navbar-container-2")
  }


  return (
    <>
      <div className="navbar-container " >
        <div className="nav-name">Sai Prashanth K</div>
        <nav className="navlinks">
          <a href="#home">Home</a>
          <a href="#aboutme">About Me</a>
          <a href="#myskills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="nav-icons">Github</div>
      </div>

    </>
  );
};

export default Navbar;
