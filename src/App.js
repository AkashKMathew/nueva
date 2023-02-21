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
    <Router>
      <div className="app">
        <Routes>
         

          <Route
            exact
            path="/"
            element={
              <><div className="mainpart">
                <Home />
                <Gevents/>
                <Download />
             
                </div>
                <div className="remain">
                <Scrollanimation />
                <Istelogo />
                <Scrollanimation />
                <Footer />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
