import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";

import Nav from "./components/Nav";
import "./App.css";

import Genre from "./components/Genre";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/genre" element={<Genre />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
