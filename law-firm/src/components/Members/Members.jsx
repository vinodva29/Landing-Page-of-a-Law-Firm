import React from "react";
import styles from "./Members.module.css";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import member4 from "../../assets/member4.png";
import member5 from "../../assets/member5.png";
import member6 from "../../assets/member6.png";

const Members = () => {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.mainText}>Our Team</h3>
      <div className={styles.adjustRows}>
        <div className={styles.firstRow}>
          <div className={styles.adjustMemberImage}>
            <img src={member1} alt="member1" className={styles.imageSizing} />
            <div className={styles.adjustText}>
              <p className={styles.Names}>Danial Def</p>
              <p className={styles.Cases}>301 Cases</p>
            </div>
          </div>
          <div className={styles.adjustMemberImageTwo}>
            <img
              src={member2}
              alt="member2"
              className={styles.imageSizingTwo}
            />
            <div className={styles.adjustTextTwo}>
              <p className={styles.NamesTwo}>Sanfole</p>
              <p className={styles.CasesTwo}>850 Cases</p>
            </div>
          </div>
          <div className={styles.adjustMemberImage}>
            <img src={member3} alt="member3" className={styles.imageSizing} />
            <div className={styles.adjustText}>
              <p className={styles.Names}>Cesforila</p>
              <p className={styles.Cases}>470 Cases</p>
            </div>
          </div>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.adjustMemberImage}>
            <img src={member4} alt="member4" className={styles.imageSizing} />
            <div className={styles.adjustText}>
              <p className={styles.Names}>Colleen</p>
              <p className={styles.Cases}>180 Cases</p>
            </div>
          </div>
          <div className={styles.adjustMemberImage}>
            <img src={member5} alt="member5" className={styles.imageSizing} />
            <div className={styles.adjustText}>
              <p className={styles.Names}>Haldone</p>
              <p className={styles.Cases}>212 Cases</p>
            </div>
          </div>
          <div className={styles.adjustMemberImage}>
            <img src={member6} alt="member6" className={styles.imageSizing} />
            <div className={styles.adjustText}>
              <p className={styles.Names}>Nik Jeo</p>
              <p className={styles.Cases}>350 Cases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;