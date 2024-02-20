import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.mainText}>Subscribe Our Newsletter</h3>
      <div className={styles.inputBoxes}>
        <input
          type="text"
          placeholder="Name:"
          className={styles.firstBox}
        ></input>
        <input
          type="text"
          placeholder="Enter your Email"
          className={styles.secondBox}
        ></input>
        <button type="submit" className={styles.sendButton}>
          <div className={styles.buttonText}>SEND</div>
        </button>
      </div>
    </div>
  );
};

export default Subscribe;