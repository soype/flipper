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
      <div className={styles.home}>
        <div className={styles.left}>
          <h1>Discover the power of solar</h1>
          <span className={styles['h-line']}></span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto, tempora animi maxime illum ex, optio aliquid nulla earum saepe debitis mollitia architecto? Odit, sit inventore ducimus tenetur nesciunt possimus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum dicta libero est quibusdam voluptates natus, veniam optio numquam, exercitationem, autem culpa nesciunt rem fugit facilis atque dolor maxime delectus!</p>
        </div>
        <div className={styles.right}>
          <span className={styles['v-line -animated']}></span>
          <img src="" alt="" />
          <span className={styles['h-line -animated']}></span>
          <img src="" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
