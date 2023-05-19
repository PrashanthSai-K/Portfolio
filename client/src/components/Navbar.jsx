import React, { useEffect, useState } from "react";
import "../css/navbar.css";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  const handlescroll = () => {

    const scrolldistance = window.scrollY;

    if (scrolldistance > 200) {
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handlescroll);

  return (
    <>
      <div
        className={
          scrolled ? "navbar-container navbar-scrolled" : "navbar-container"
        }
      >
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
