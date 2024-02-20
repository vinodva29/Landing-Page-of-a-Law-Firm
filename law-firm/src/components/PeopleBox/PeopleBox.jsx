import React, { useState } from "react";
import styles from "./PeopleBox.module.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.svg";
import Person1 from "../../assets/person1.png";
import Person2 from "../../assets/person2.png";
import Person3 from "../../assets/person3.png";

const PeopleBox = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  const isCardSelected = (cardIndex) => {
    return selectedCard === cardIndex;
  };

  const handlePrevious = () => {
    setSelectedCard((prevCard) => (prevCard - 1 + 3) % 3);
  };

  const handleNext = () => {
    setSelectedCard((prevCard) => (prevCard + 1) % 3);
  };

  return (
    <div className={styles.mainContainerForThis}>
      <div className={styles.topSection}>
        <h2 className={styles.mainTextForThis}>What says our happy Clients</h2>
        <div className={styles.navigation}>
          <div className={styles.leftArrowCircle} onClick={handlePrevious}>
            <img src={leftArrow} alt="leftArrow" className={styles.leftArrow} />
          </div>
          <div className={styles.rightArrowCircle} onClick={handleNext}>
            <img
              src={rightArrow}
              alt="rightArrow"
              className={styles.rightArrow}
            />
          </div>
        </div>
      </div>
      {/* Card Section */}
      {/* 1st card  */}
      <div className={styles.allCards}>
        <div
          className={`${styles.MainContainer} ${
            isCardSelected(0) ? styles.selectedCard : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <div className={styles.smallBox}>
            <div className={styles.topCircle}>
              <img
                src={Person1}
                alt="Gift"
                className={styles.giftImage}
                width={51.667}
                height={49}
              />
            </div>
            <h4 className={styles.mainText}>Jane Cooper</h4>
            <h5 className={styles.subText}>Ceo of Hunt</h5>
            <p className={styles.descriptionText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
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
                src={Person3}
                alt="Gift"
                className={styles.giftImage}
                width={51.667}
                height={49}
              />
            </div>
            <h4 className={styles.mainText}>Devon Lane</h4>
            <h5 className={styles.subText}>Ceo of Hunt</h5>
            <p className={styles.descriptionText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
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
                src={Person2}
                alt="Gift"
                className={styles.giftImage}
                width={51.667}
                height={49}
              />
            </div>
            <h4 className={styles.mainText}>Robert Fox</h4>
            <h5 className={styles.subText}>Ceo of Hunt</h5>
            <p className={styles.descriptionText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleBox;