import './App.css';
import Header from "./components/header";
import Guests from "./components/guests";
import Plan from "./components/plan";
import React from "react";
import Start from "./components/start";
import Point from "./components/point";

function App() {
  return (
    <div className="App">
      {/*<Header/>*/}
      <Start />
      <Plan/>
      <h1 style={{
        fontFamily: 'Snell Roundhand, cursive',
        color: 'teal',
      }}>
        Гости
      </h1>
      <Guests/>
      <Point />
    </div>
  );
}

export default App;
