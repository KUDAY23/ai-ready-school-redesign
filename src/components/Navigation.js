"use client";

import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} glass-panel`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className="gradient-text-accent" style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em', fontFamily: 'var(--font-heading)' }}>
            AI Ready
          </span>
          <span style={{ fontWeight: 400, marginLeft: '0.25rem' }}>School</span>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            <li><a href="#products">Products</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className={styles.desktopActions}>
          <a href="#demo" className="button-secondary" style={{ marginRight: '1rem', border: 'none', background: 'transparent' }}>Log In</a>
          <a href="#contact" className="button-primary">Schedule a Call</a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''} glass-panel`}>
        <nav>
          <ul className={styles.mobileNavLinks}>
            <li><a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a></li>
            <li><a href="#solutions" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a></li>
            <li><a href="#resources" onClick={() => setIsMobileMenuOpen(false)}>Resources</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          </ul>
          <div className={styles.mobileActions}>
            <a href="#contact" className="button-primary" style={{ width: '100%', marginBottom: '15px' }} onClick={() => setIsMobileMenuOpen(false)}>Schedule a Call</a>
            <a href="#demo" className="button-secondary" style={{ width: '100%' }} onClick={() => setIsMobileMenuOpen(false)}>Log In</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
