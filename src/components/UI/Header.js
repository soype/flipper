import React from 'react'

import styles from './Header.module.css'

const Header = (props) => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>Title</div>
        <div className={styles.menu}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </div>
    </div>
  )
}

export default Header