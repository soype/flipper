import logo from "./logo.svg";
import "./App.css";

function App() {

  const rotateHandler = () => {
    document.getElementsByClassName("App")[0].classList.toggle('rotate');
  }

  return (
    <div className="App">
      <div className="container" onClick={rotateHandler}>
        <div className="front">Frente</div>
        <div className="back">Atras</div>
      </div>
    </div>
  );
}

export default App;
