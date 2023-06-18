import React from "react";

import Header from "../UI/Header";

import styles from "./Contact.module.css";

const Contact = (props) => {
  const homeHandler = () => {
    document.getElementById("container").classList.toggle(styles.dissappear);
    setTimeout(() => {
      props.toggleHome();
      document.getElementById("container").classList.toggle(styles.dissappear);
    }, 500);
  };

  const aboutHandler = () => {
    document.getElementById("container").classList.toggle(styles.dissappear);
    setTimeout(() => {
      props.toggleAbout();
      document.getElementById("container").classList.toggle(styles.dissappear);
    }, 500);
  };

  const contactHandler = () => {
    if (props.isContact === false) {
      document.getElementById("container").classList.toggle(styles.dissappear);
      setTimeout(() => {
        props.toggleContact();
        document
          .getElementById("container")
          .classList.toggle(styles.dissappear);
      }, 500);
    }
  };

  return (
    <div id="container" className={styles.container}>
      <Header
        toggleHome={homeHandler}
        toggleAbout={aboutHandler}
        toggleContact={contactHandler}
      ></Header>
      <div className={styles.contact}>Contact</div>
    </div>
  );
};

export default Contact;
