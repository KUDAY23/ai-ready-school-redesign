import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  // TODO: Maybe add an interactive particle js background later instead of just CSS orbs?
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundOrb} style={{ top: '-10%', left: '10%' }} />
      <div 
        className={styles.backgroundOrb} 
        style={{ 
          top: '40%', 
          right: '-5%', 
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0) 70%)' 
        }} 
      />
      
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.pillBadge}>
          <span className={styles.pillDot}></span>
          India's First Complete AI Ecosystem
        </div>
        
        <h1 className={styles.title}>
          Every School Uses AI.<br />
          <span className="gradient-text-accent">Is Yours Transformative?</span>
        </h1>
        
        <p className={styles.description}>
          Everything a school needs to lead the AI era. Personalised AI companions for every student. Intelligent tools that free teachers to teach. Physical AI labs where ideas come alive. Securely, on your terms.
        </p>
        
        <div className={styles.ctaGroup}>
          <a href="#contact" className={`button-primary ${styles.heroBtn}`}>Schedule a Call</a>
          <a href="#assessment" className={`button-secondary ${styles.heroBtn}`}>Take Readiness Assessment</a>
        </div>
        
        {/* Mockup dashboard */}
        <div className={styles.dashboardPreview} style={{ marginTop: '50px' }}>
          <div className={`${styles.glassWindow} glass-panel`}>
            <div className={styles.windowHeader} style={{ display: 'flex', alignItems: 'center' }}>
              <div className={styles.dots}>
                <span /><span /><span />
              </div>
            </div>
            <div className={styles.windowBody}>
              <div className={styles.sidebar}>
                <div className={styles.navItem} style={{ width: '80%' }} />
                <div className={styles.navItem} style={{ width: '60%' }} />
                <div className={styles.navItem} style={{ width: '70%' }} />
              </div>
              <div className={styles.mainContent}>
                <div className={styles.cardHeader} />
                <div className={styles.gridCards}>
                  <div className={styles.gridCard} />
                  <div className={styles.gridCard} />
                  <div className={styles.gridCard} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
