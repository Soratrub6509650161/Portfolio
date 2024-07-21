import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../public/css/Navbar2.module.css'; // ตรวจสอบเส้นทางให้ถูกต้อง

function Navbar2() {
  const [activeItem, setActiveItem] = useState('Home'); // ตั้งค่า state เพื่อเก็บหน้าปัจจุบัน

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <Container>
      <ul className={styles.GlobalNav}>
        <div className={styles.HeadnavbarItem}>
          <li>
            Save
          </li>
          <span className={styles.dotHead}>.</span>
        </div>
        <div className={styles.TailNav}>
          <li
            className={`${styles.navbarItem} ${activeItem === 'Home' ? styles.active : ''}`}
            onClick={() => handleItemClick('Home')}
          >
            <Link to="/" className={styles.navbarLink}>Home</Link>
          </li>

          <li
            className={`${styles.navbarItem} ${activeItem === 'Resume' ? styles.active : ''}`}
            onClick={() => handleItemClick('Resume')}
          >
            <Link to="/resume" className={styles.navbarLink}>Resume</Link>
          </li>
          <li
            className={`${styles.navbarItem} ${activeItem === 'Work' ? styles.active : ''}`}
            onClick={() => handleItemClick('Work')}
          >
            <Link to="/work" className={styles.navbarLink}>Work</Link>
          </li>
          <li
            className={`${styles.navbarItem} ${activeItem === 'Contact' ? styles.active : ''}`}
            onClick={() => handleItemClick('Contact')}
          >
            <Link to="/contact" className={styles.navbarLink}>Contact</Link>
          </li>
          <li
            className={styles.tailHigh}
          >
            Hire me
          </li>
        </div>
      </ul>
    </Container>
  );
}

export default Navbar2;
