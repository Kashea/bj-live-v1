import type { NextPage } from "next";
import styles from "./container-card.module.css";

const ContainerCard: NextPage = () => {
  return (
    <section className={styles.notJust} id="notjust">
      <img className={styles.notJustChild} alt="" src="/rectangle-238@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.wereNotJustAboutBettingParent}>
          <h1 className={styles.wereNotJustContainer}>
            <p className={styles.were}>WE’RE</p>
            <p className={styles.were}>{`NOT `}</p>
            <p className={styles.were}>{`JUST `}</p>
            <p className={styles.were}>{`ABOUT `}</p>
            <p className={styles.were}>BETTING</p>
          </h1>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.bjcharity11Wrapper}>
            <img
              className={styles.bjcharity11Icon}
              alt=""
              src="/bjcharity1-1@2x.png"
            />
          </div>
          <div className={styles.wereSpreadingLoveContainer}>
            <p className={styles.were}>
              <b>We're Spreading Love</b>
            </p>
            <p className={styles.togetherWereMakingADiffe}>
              <span>
                <span className={styles.blankLine}>&nbsp;</span>
                <span>
                  Together, we’re making a difference by supporting charities
                  that bring caring individuals together to uplift communities
                  in need. Our mission is to address the challenges faced by
                  underserved communities, and even a tiny step from us can
                  create significant positive changes. We believe in ensuring
                  every person has access to warm meals and clothing, especially
                  children. Our goal is to eliminate hunger among kids and make
                  a lasting impact. Join us in this noble cause and create a
                  brighter future together.
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameItem}
            alt=""
            src="/rectangle-202@2x.png"
          />
          <div className={styles.latestSportsUpdatesContainer}>
            <p className={styles.were}>
              <span>
                <b className={styles.latestSportsUpdates1}>
                  Latest Sports Updates
                </b>
              </span>
              <span>
                <span>
                  <span>{` `}</span>
                </span>
              </span>
            </p>
            <p className={styles.togetherWereMakingADiffe}>
              <span>
                <span>
                  <span>&nbsp;</span>
                  <span>
                    Together, we’re making a difference by supporting charities
                    that bring caring individuals together to uplift communities
                    in need. Our mission is to address the challenges faced by
                    underserved communities, and even a tiny step from us can
                    create significant positive changes. We believe in ensuring
                    every person has access to warm meals and clothing,
                    especially children. Our goal is to eliminate hunger among
                    kids and make a lasting impact. Join us in this noble cause
                    and create a brighter future together.
                  </span>
                </span>
              </span>
            </p>
          </div>
          <img
            className={styles.bjcharity12Icon}
            alt=""
            src="/bjcharity1-2@2x.png"
          />
        </div>
        <div className={styles.frameGroup}>
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-203@2x.png"
          />
          <div className={styles.yourPremierOnlineContainer}>
            <p className={styles.were}>
              <b>Your premier online betting Community</b>
            </p>
            <p className={styles.bjForumIs}>
               BJ Forum is your pathway to elevate your betting journey,
              fostering learning, connection, and aheightened betting
              experience. Join a vibrant gathering of bettors from around the
              globe, where insights, tips, and spirited discussion come
              together.
            </p>
          </div>
          <img
            className={styles.bjcharity11Icon1}
            alt=""
            src="/bjcharity1-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ContainerCard;
