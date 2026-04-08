import React from 'react';
import styles from './ProductOverview.module.css';

// Product data for the grid
const productsList = [
  {
    id: 'cypher',
    name: 'Cypher',
    tagline: 'AI Learning Companion',
    description: 'Personalised active learning that helps students ask honest, brave, and thoughtful questions.',
    color: '#6366f1', // Indigo
  },
  {
    id: 'morpheus',
    name: 'Morpheus',
    tagline: 'Teaching Agent',
    description: 'Reduce educator workload while deepening every student\'s learning experience.',
    color: '#ec4899', // Pink
  },
  {
    id: 'zion',
    name: 'Zion',
    tagline: 'AI Tool Suite',
    description: '30+ AI tools for your school. Learning, creative research, and project tools in one place.',
    color: '#8b5cf6', // Violet
  },
  {
    id: 'neo',
    name: 'NEO',
    tagline: 'AI Innovation Lab',
    description: 'Turn your school into an innovation centre where students build with AI.',
    color: '#14b8a6', // Teal
  },
  {
    id: 'matrix',
    name: 'Matrix',
    tagline: 'AI Infrastructure',
    description: 'Local AI infrastructure providing necessary hardware and software securely.',
    color: '#f59e0b', // Amber
  }
];

export default function ProductOverview() {
  return (
    <section id="products" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            The Complete <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className={styles.subtitle}>
            Five core products designed seamlessly to bring AI responsibly and effectively into your school.
          </p>
        </div>

        <div className={styles.grid}>
          {productsList.map((prod) => {
            return (
              <div key={prod.id} className={`${styles.card} glass-panel`}>
                <div 
                  className={styles.cardGlow} 
                  style={{ background: `radial-gradient(circle at top right, ${prod.color}22, transparent 70%)` }}
                ></div>
                
                <div className={styles.cardContent}>
                  <div 
                    className={styles.iconWrapper} 
                    style={{ backgroundColor: `${prod.color}22`, border: `1px solid ${prod.color}55` }}
                  >
                    <div className={styles.iconInner} style={{ backgroundColor: prod.color }}></div>
                  </div>
                  
                  <div>
                    <h3 className={styles.productName}>{prod.name}</h3>
                    <p className={styles.productTagline} style={{ color: prod.color }}>{prod.tagline}</p>
                  </div>
                  
                  <p className={styles.productDesc}>{prod.description}</p>
                  
                  <a href={`#${prod.id}`} className={styles.learnMore}>
                    Know more <span>&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
