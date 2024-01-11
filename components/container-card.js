import SportsContainer from "./sports-container";
import BettingCommunityCard from "./betting-community-card";
import styles from "./container-card.module.css";

const ContainerCard = () => {
  return (
    <section className={styles.notJust} id="notjust">
      <img className={styles.notJustChild} alt="" src="/rectangle-238@2x.png" />
      <div className={styles.notJustInner}>
        <div className={styles.wereParent}>
          <div className={styles.were}>
            <h1 className={styles.wereNotJustContainer}>
              <p className={styles.not}>WE’RE</p>
              <p className={styles.not}>{`NOT `}</p>
              <p className={styles.not}>{`JUST `}</p>
              <p className={styles.not}>{`ABOUT `}</p>
              <p className={styles.not}>BETTING</p>
            </h1>
            <div className={styles.wereChild} />
          </div>
          <SportsContainer />
          <SportsContainer />
          <BettingCommunityCard />
        </div>
      </div>
    </section>
  );
};

export default ContainerCard;
