import React from "react";
import styles from "./MainBodyTopText.module.css";

const MainBodyTopText = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.mainText}>Let’s Introduce Ourself</h2>
      <div className={styles.line}></div>
      <div className={styles.rightSideBox}>
        <h4 className={styles.mediumText}>Criminal Lawyer</h4>
        <p className={styles.smallText}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default MainBodyTopText;