// import Contents from "./components/Contents";
// import Hero from "./components/Hero";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

import About from "./pages/about";
import Dropdown from "./components/Dropdown";
import Contact from "./pages/contact";
import Kitchen from "./pages/kitchen";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized!");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/kitchen" component={Kitchen} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
