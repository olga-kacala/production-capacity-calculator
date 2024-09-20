import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import blueprint from "../src/assets/img/blueprint.jpg";
import { Silo } from "./features/silo/Silo";
import { Mixer } from "./features/mixer/Mixer";
import { Storage } from "./features/storage/Storage";
import { Press } from "./features/press/Press";
import { Autoclave } from "./features/autoclave/Autoclave";
import { Dryer } from "./features/dryer/Dryer";
import {Saw} from "./features/saw/Saw";
import { Packaging } from "./features/packaging/Packaging";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your production capacity calculator</h1>
        <img src={blueprint} className="App-logo" alt="logo" />
      </header>
      <Routes>
          <Route path="/silo" element={<Silo />} />
          <Route path="/mixer" element={<Mixer />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/press" element={<Press />} />
          <Route path="/autoclave" element={<Autoclave />} />
          <Route path="/dryer" element={<Dryer />} />
          <Route path="/saw" element={<Saw />} />
          <Route path="/packaging" element={<Packaging />} />
        </Routes>
    </div>
  );
}

export default App;
