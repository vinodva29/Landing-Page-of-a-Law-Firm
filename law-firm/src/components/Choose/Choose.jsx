import React from "react";
import styles from "./Choose.module.css";
import ChooseCard from "../ChooseCard/ChooseCard";

const Choose = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainText}>Why Choose us?</h1>
      <div>
        <ChooseCard />
      </div>
    </div>
  );
};

export default Choose;