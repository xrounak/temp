import React, { useState } from "react"
import styles from "./Navbar.module.css"
import logo from "../assets/indorve-logo.png" // Use your rectangular PNG logo

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoGroup}>
        <img src={logo} className={styles.logo} alt="Indorve Logo" />
        <span className={styles.brand}>INdorVE</span>

      </div>

      {/* Desktop Links */}
      <div className={`${styles.links} ${styles.desktopLinks}`}>
        <a href="#about" className={styles.link}>About</a>
        <a href="#post" className={styles.link}>Post Task</a>
        <a href="#earn" className={styles.link}>Earn</a>
        <a href="#login" className={styles.link}>Login / Signup</a>
      </div>

      {/* Mobile Hamburger Icon */}
      <button 
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ''}`}>
        <a onClick={closeMenu} href="#about" className={styles.mobileLink}>About</a>
        <a onClick={closeMenu} href="#post" className={styles.mobileLink}>Post Task</a>
        <a onClick={closeMenu} href="#earn" className={styles.mobileLink}>Earn</a>
        <a onClick={closeMenu} href="#login" className={styles.mobileLink}>Login / Signup</a>
      </div>
    </nav>
  )
}
