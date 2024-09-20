import React from "react";
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
        <img src={blueprint} className="App-logo" alt="logo" />
      </header>
      <nav>
        <Silo />
        <Mixer />
        <Storage />
        <Press />
        <Autoclave />
        <Dryer />
        <Saw />
        <Packaging />
      </nav>
    </div>
  );
}

export default App;
