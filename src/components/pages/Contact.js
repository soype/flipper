import React, {useState} from "react";

import Header from "../UI/Header";

import styles from "./Contact.module.css";

const Contact = (props) => {

  const [formEnabled, setFormEnabled] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

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

  const nameHandler = e => {
    setContactName(e.target.value);
    if(e.target.value.length > 0 && contactEmail.length > 0){
      setFormEnabled(true);
    }else{
      setFormEnabled(false);
    }
  }

  const emailHandler = e => {
    setContactEmail(e.target.value);
    if(e.target.value.includes('@') && contactName.length > 0){
      setFormEnabled(true);
    }else{
      setFormEnabled(false);
    }
  }

  const messageHandler = e => {
    setContactMessage(e.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(contactName);
    console.log(contactEmail);
    console.log(contactMessage);
  }

  return (
    <div id="container" className={styles.container}>
      <Header
        toggleHome={homeHandler}
        toggleAbout={aboutHandler}
        toggleContact={contactHandler}
      ></Header>
      <div className={styles.contact}>
        <div className={styles['form-container']}>
          <form action="" className={styles['contact-form']} onSubmit={formSubmitHandler}>
            <h2>Let's get in touch</h2>
            <input type="text" placeholder="Name" required onChange={nameHandler} />
            <input type="email" placeholder="Email" required onChange={emailHandler} />
            <textarea name="" id="" cols="30" rows="10" placeholder="Your message" onChange={messageHandler}></textarea>
            <button className={`${styles['submit-btn']} ${ formEnabled && styles['submit-enabled']}`} disabled={!formEnabled}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
