import styles from "../NavBar/NavBar.module.css";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <nav className={styles.fullNavBar}>
      <div>
        <Logo />
      </div>
      <div className={styles.middleTexts}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <button className={styles.lastButton} type="submit">
        <p className={styles.buttonText}>Contact Now</p>
      </button>
    </nav>
  );
};

export default NavBar;