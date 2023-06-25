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
        <div className={styles.logo} onClick={toggleHomeHandler}>Solar Systems</div>
        <div className={styles.menu}>
            <li onClick={toggleHomeHandler}>Home</li>
            <div className={styles.list}>Services 
              <ul className={styles['list-content']}>
                <li>On-grid</li>
                <li>Off-grid</li>
                <li>Hybrid</li>
              </ul>
            </div>
            <li onClick={toggleAboutHandler}>About</li>
            <li onClick={toggleContactHandler}>Contact</li>
        </div>
    </div>
  )
}

export default Header