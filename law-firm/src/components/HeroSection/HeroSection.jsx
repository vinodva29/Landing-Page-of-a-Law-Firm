import React from "react";
import styles from "./HeroSection.module.css";
import ManImage from "../../assets/Person.png";
import SearchBar from "../SearchBar/SearchBar";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroTexts}>
          <div>
            <h2 className={styles.mainTextOne}>You don’t have to</h2>
            <h2 className={styles.mainTextTwo}>Fight them Alone.</h2>
          </div>
          <p className={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <SearchBar />
        </div>
        <div className={styles.mainBox}>
          <div className={styles.pictureBackground}>
            <img src={ManImage} alt="Person" width={443.511} height={568.908} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;