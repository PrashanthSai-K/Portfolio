import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Project from "./components/Project";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="home">
        <Navbar />
        <Landing />
      </section>
      <About />
      <Project />
      <Team />
      <Contact />
    </>
  );
}

export default App;
