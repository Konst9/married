import './App.css';
import Header from "./components/header";
import Guests from "./components/guests";
import Plan from "./components/plan";
import React from "react";
import Start from "./components/start";
import Point from "./components/point";
import Thing from "./components/thing";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      {/*<Header/>*/}
      <Start />
      <Plan/>
      <h3 style={{
        fontFamily: 'Snell Roundhand, cursive',
        color: 'teal',
      }}>
        Гости
      </h3>
      <Guests/>
      <Thing />
      <Point />
      <Footer />
    </div>
  );
}

export default App;
