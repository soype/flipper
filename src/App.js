import {useState} from 'react';

import "./App.css";

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Header from './components/UI/Header';

function App(props) {

  const rotateHandler = () => {
    document.getElementsByClassName("App")[0].classList.toggle('rotate');
  }

  return (
    <div className="App">
      <div className="container" onClick={rotateHandler}>
        <div className="front" id="front">
        <Header></Header>
          Frente</div>
        <div className="back" id="back">
        <Header></Header>
          Atras</div>
      </div>
    </div>
  );
}

export default App;
