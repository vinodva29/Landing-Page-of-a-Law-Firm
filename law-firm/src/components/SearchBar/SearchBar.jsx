import React from "react";
import styles from "./SearchBar.module.css";
import MessageIcon from "../../assets/Message.png";

const SearchBar = () => {
  return (
    <>
      <form className={styles.wrapper}>
        <div className={styles.inputContainer}>
          <img
            src={MessageIcon}
            alt="MessageIcon"
            className={styles.MessageIconStyle}
          />
          <input
            className={styles.search}
            placeholder="Enter your eamil address"
          />
          <button className={styles.searchButton} type="submit">
            <p className={styles.buttonText}>Let’s Talk</p>
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;