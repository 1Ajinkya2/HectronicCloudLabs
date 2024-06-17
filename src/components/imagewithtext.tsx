// components/ImageWithText.tsx
import React from 'react';
import Image from 'next/image';
import styles from './ImageWithText.module.css';

interface ImageWithTextProps {
  imageSrc: string;
  imageAlt: string;
  headerText: string;
  paragraphText: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageSrc, imageAlt, headerText, paragraphText }) => {
  return (
    <div className={styles.imageTextContainer}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} className={styles.image} />
      </div>
      <div className={styles.textContent}>
        <h1>{headerText}</h1>
        <p>{paragraphText}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
