import React from 'react';
import styles from '../_styles/Parallax.module.css'

const CareerPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.parallax}>
        <div className={styles.content}>
          <h1>Career at Hectronic</h1>
          <p>
            Join Hectronic and be part of a team that innovates and leads in the tech industry. We are committed to providing an inclusive and dynamic work environment.
          </p>
        </div>
      </div>
      
      <div className={styles.section}>
        <h2>Responsibilities</h2>
        <p>
          As a member of our team, you will be responsible for developing cutting-edge technology solutions that make a real impact. You will work collaboratively with other professionals to deliver high-quality products.
        </p>
      </div>
      
      <div className={styles.section}>
        <h2>Qualifications</h2>
        <p>
          We are looking for candidates with a strong background in technology, excellent problem-solving skills, and a passion for innovation. A degree in Computer Science or related field is preferred.
        </p>
      </div>
    </main>
  );
}

export default CareerPage;
