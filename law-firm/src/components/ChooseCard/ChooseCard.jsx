import React, { useState } from "react";
import styles from "./ChooseCard.module.css";
import giftImage from "../../assets/Gift.png";

const ChooseCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  const isCardSelected = (cardIndex) => {
    return selectedCard === cardIndex;
  };

  return (
    <div className={styles.allCards}>
      {/* 1st card */}
      <div
        className={`${styles.MainContainer} ${
          isCardSelected(0) ? styles.selectedCard : ""
        }`}
        onClick={() => handleClick(0)}
      >
        <div className={styles.smallBox}>
          <div className={styles.topCircle}>
            <img
              src={giftImage}
              alt="Gift"
              className={styles.giftImage}
              width={51.667}
              height={49}
            />
          </div>
          <h4 className={styles.mainText}>98% Success Rate</h4>
          <p className={styles.descriptionText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={styles.buttonStyle} type="submit">
            <p className={styles.buttonText}>Read More</p>
          </button>
        </div>
      </div>
      {/* 2nd card */}
      <div
        className={`${styles.MainContainer} ${
          isCardSelected(1) ? styles.selectedCard : ""
        }`}
        onClick={() => handleClick(1)}
      >
        <div className={styles.smallBox}>
          <div className={styles.topCircle}>
            <img
              src={giftImage}
              alt="Gift"
              className={styles.giftImage}
              width={51.667}
              height={49}
            />
          </div>
          <h4 className={styles.mainText}>100% Success Rate</h4>
          <p className={styles.descriptionText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={styles.buttonStyle} type="submit">
            <p className={styles.buttonText}>Read More</p>
          </button>
        </div>
      </div>
      {/* 3rd card  */}
      <div
        className={`${styles.MainContainer} ${
          isCardSelected(2) ? styles.selectedCard : ""
        }`}
        onClick={() => handleClick(2)}
      >
        <div className={styles.smallBox}>
          <div className={styles.topCircle}>
            <img
              src={giftImage}
              alt="Gift"
              className={styles.giftImage}
              width={51.667}
              height={49}
            />
          </div>
          <h4 className={styles.mainText}>100% Success Rate</h4>
          <p className={styles.descriptionText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={styles.buttonStyle} type="submit">
            <p className={styles.buttonText}>Read More</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseCard;