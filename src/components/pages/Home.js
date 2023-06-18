import React from "react";

import Header from "../UI/Header";

import styles from "./Home.module.css";

const Home = (props) => {
  const homeHandler = () => {
    if (props.home === false) {
      document.getElementById("container").classList.toggle(styles.dissappear);
      setTimeout(() => {
        props.toggleHome();
        document
          .getElementById("container")
          .classList.toggle(styles.dissappear);
      }, 500);
    }
  };

  const aboutHandler = () => {
    document.getElementById("container").classList.toggle(styles.dissappear);
    setTimeout(() => {
      props.toggleAbout();
      document.getElementById("container").classList.toggle(styles.dissappear);
    }, 500);
  };

  const contactHandler = () => {
    document.getElementById("container").classList.toggle(styles.dissappear);
    setTimeout(() => {
      props.toggleContact();
      document.getElementById("container").classList.toggle(styles.dissappear);
    }, 500);
  };
  return (
    <div id="container" className={styles.container}>
      <Header
        toggleHome={homeHandler}
        toggleAbout={aboutHandler}
        toggleContact={contactHandler}
      ></Header>
      <div className={styles.home}>Home</div>
    </div>
  );
};

export default Home;
