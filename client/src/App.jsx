import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <section  id="home">
        <Navbar />
        <Landing />
      </section>
      <About />
    </>
  );
}

export default App;
