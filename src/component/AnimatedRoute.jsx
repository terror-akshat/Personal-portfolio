import React from "react";
import Home from "./../Pages/Home";
import Project from "./../Pages/Project";
import Contact from "./../Pages/Contact";
import About from "./../Pages/About";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Project" element={<Project />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
