import React from 'react'

import styles from './Header.module.css'

const Header = (props) => {

  const toggleHomeHandler = () => {
    props.toggleHome();
  }

  const toggleAboutHandler = () => {
    props.toggleAbout();
  }

  const toggleContactHandler = () => {
    props.toggleContact();
  }

  return (
    <div className={styles.header}>
        <div className={styles.logo}>Title</div>
        <div className={styles.menu}>
            <li onClick={toggleHomeHandler}>Home</li>
            <li onClick={toggleAboutHandler}>About</li>
            <li onClick={toggleContactHandler}>Contact</li>
        </div>
    </div>
  )
}

export default Header