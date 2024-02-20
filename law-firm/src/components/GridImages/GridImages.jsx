import React from "react";
import styles from "./GridImages.module.css";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Image5 from "../../assets/image5.png";
import Image6 from "../../assets/image6.png";

const GridImages = () => {
  return (
    <div className={styles.imageGrid}>
      <div className={styles.FirstBox}>
        <div className={styles.gridItem}>
          <img src={Image2} alt="image1" className={styles.gridImage} />
          <p className={styles.imageText1}>BUSINESS LAW</p>
        </div>
        <div className={styles.gridItem}>
          <img src={Image1} alt="image1" className={styles.gridImage} />
          <p className={styles.imageText2}>Partnership LAW</p>
        </div>
      </div>
      <div className={styles.secondBox}>
        <div className={styles.gridItem}>
          <img src={Image3} alt="image1" className={styles.gridImage} />
          <p className={styles.imageText3}>REAL ESTATE LAW</p>
        </div>
        <div className={styles.gridItem}>
          <img src={Image4} alt="image1" className={styles.gridImage} />
          <p className={styles.imageText4}>BUSINESS LAW</p>
        </div>
      </div>
      <div className={styles.thirdBox}>
        <div className={styles.gridItem}>
          <img src={Image5} alt="image1" className={styles.gridImage} />
          <p className={styles.imageText5}>LANDLORD DISPUTES</p>
        </div>
        <div className={styles.gridItem}>
          <img src={Image6} alt="image1" className={styles.gridImage} />
          <p className={styles.imageText6}>ELDER ABUSE</p>
        </div>
      </div>
    </div>
  );
};

export default GridImages;