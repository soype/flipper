import { useState } from "react";

import "./App.css";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

function App(props) {
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isFront, setIsFront] = useState(true);

  const homeHandler = () => {
    if (!isHome) {
      setIsHome(true);
      setIsAbout(false);
      setIsContact(false);
      document.getElementsByClassName("App")[0].classList.toggle("rotate");
      if (isFront) {
        setIsFront(false);
      } else {
        setIsFront(true);
      }
    }
  };

  const aboutHandler = () => {
    if (!isAbout) {
      setIsHome(false);
      setIsAbout(true);
      setIsContact(false);
      document.getElementsByClassName("App")[0].classList.toggle("rotate");
      if (isFront) {
        setIsFront(false);
      } else {
        setIsFront(true);
      }
    }
  };

  const contactHandler = () => {
    if (!isContact) {
      setIsHome(false);
      setIsAbout(false);
      setIsContact(true);
      document.getElementsByClassName("App")[0].classList.toggle("rotate");
      if (isFront) {
        setIsFront(false);
      } else {
        setIsFront(true);
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="front" id="front">
          {isHome && isFront && (
            <Home
              isHome={isHome}
              toggleHome={homeHandler}
              toggleAbout={aboutHandler}
              toggleContact={contactHandler}
            ></Home>
          )}
          {isAbout && isFront && (
            <About
              isAbout={isAbout}
              toggleHome={homeHandler}
              toggleAbout={aboutHandler}
              toggleContact={contactHandler}
            ></About>
          )}
          {isContact && isFront && (
            <Contact
              isContact={isContact}
              toggleHome={homeHandler}
              toggleAbout={aboutHandler}
              toggleContact={contactHandler}
            ></Contact>
          )}
        </div>
        <div className="back" id="back">
          {isHome && !isFront && (
            <Home
              isHome={isHome}
              toggleHome={homeHandler}
              toggleAbout={aboutHandler}
              toggleContact={contactHandler}
            ></Home>
          )}
          {isAbout && !isFront && (
            <About
              isAbout={isAbout}
              toggleHome={homeHandler}
              toggleAbout={aboutHandler}
              toggleContact={contactHandler}
            ></About>
          )}
          {isContact && !isFront && (
            <Contact
              isContact={isContact}
              toggleHome={homeHandler}
              toggleAbout={aboutHandler}
              toggleContact={contactHandler}
            ></Contact>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
