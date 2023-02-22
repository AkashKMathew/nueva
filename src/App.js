import React from "react";
import "./App.css";
import Home from "./components/Home";

import Istelogo from "./components/Istelogo";
import Footer from "./components/Footer";
import Scrollanimation from "./components/Scrollanimation";
import Gevents from "./components/Gevents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Download from "./components/Download";
function App() {


  return (
    <div className="app">
      <Home />
      <Gevents />
      <Download />
      <Scrollanimation />
      <Istelogo />
      <Scrollanimation />
      <Footer />
    </div>
  );
}

export default App;
