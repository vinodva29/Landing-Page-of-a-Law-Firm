import React from "react";
import styles from "./GridSection.module.css";
import GridImages from "../GridImages/GridImages";

const GridSection = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.mainText}>Area of Practices</h2>
      <div className={styles.GridContainer}>
        <GridImages />
      </div>
    </div>
  );
};

export default GridSection;