import SportsContainer from "./sports-container";
import BettingCommunityCard from "./betting-community-card";
import styles from "./container-card1.module.css";

const ContainerCard1 = () => {
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
          <div className={styles.sports}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-202@2x.png"
              />
              <div className={styles.bjcharity12Parent}>
                <img
                  className={styles.bjcharity12Icon}
                  alt=""
                  src="/bjcharity1-2@2x.png"
                />
                <div className={styles.wereSpreadingLoveParent}>
                  <b className={styles.wereSpreadingLove}>
                    We’re Spreading Love
                  </b>
                  <div className={styles.togetherWereMakingContainer}>
                    <p className={styles.not}>
                      Together, we’re making a difference by supporting
                      charities that bring caring individuals together to uplift
                      communities in need. Our mission is to address the
                      challenges faced by underserved communities, and even a
                      tiny step from us can create significant positive changes.
                      We believe in ensuring every person has access to warm
                      meals and clothing, especially children. Our goal is to
                      eliminate hunger among kids and make a lasting impact.
                      Join us in this noble cause and create a brighter future
                      together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SportsContainer />
          <BettingCommunityCard />
        </div>
      </div>
    </section>
  );
};

export default ContainerCard1;
