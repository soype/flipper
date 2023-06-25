import React from "react";

import Header from "../UI/Header";

import styles from "./About.module.css";

const About = (props) => {
  const homeHandler = () => {
    document.getElementById("container").classList.toggle(styles.dissappear);
    setTimeout(() => {
      props.toggleHome();
      document.getElementById("container").classList.toggle(styles.dissappear);
    }, 500);
  };

  const aboutHandler = () => {
    if (props.isAbout === false) {
      document.getElementById("container").classList.toggle(styles.dissappear);
      setTimeout(() => {
        props.toggleAbout();
        document
          .getElementById("container")
          .classList.toggle(styles.dissappear);
      }, 500);
    }
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
      <div className={styles.about}>
        <div className={styles['featured-image']}>
          <img src="https://cdn.britannica.com/91/222691-050-E8BDF226/installing-solar-panels.jpg" alt="featured about" />
        </div>
        <div className={styles['about-content']}>
          <h2>Local ingenuity</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut nostrum ratione impedit odit, exercitationem, ab, unde nulla explicabo similique dicta excepturi aut id quisquam atque iusto quaerat doloremque minus?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat sunt illum cumque dicta deleniti aspernatur, illo officiis id dolore adipisci quaerat iste odio temporibus minus. Pariatur eaque perspiciatis nihil est?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, maiores sequi! Ipsa cupiditate quis, fuga nemo, non est, beatae expedita modi atque eveniet dicta saepe ullam porro fugit? Eveniet, accusamus.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
