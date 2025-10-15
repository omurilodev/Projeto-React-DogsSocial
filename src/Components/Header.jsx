import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dog from '../Assets/dogs.svg?react'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label='Dogs - Home' className={styles.logo}>
          <Dog />
        </Link>
        <Link to="/login" className={styles.login}>Login | Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
