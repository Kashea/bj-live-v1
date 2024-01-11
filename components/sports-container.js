import styles from "./sports-container.module.css";

const SportsContainer = () => {
  return (
    <div className={styles.sports}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-202@2x.png" />
        <div className={styles.bjcharity12Parent}>
          <img
            className={styles.bjcharity12Icon}
            alt=""
            src="/bjcharity1-2@2x.png"
          />
          <div className={styles.latestSportsUpdatesParent}>
            <div className={styles.latestSportsUpdatesContainer}>
              <p className={styles.latestSportsUpdates}>
                <span>
                  <b>Latest Sports Updates</b>
                  <span>{` `}</span>
                </span>
              </p>
              <p className={styles.blankLine}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
            </div>
            <div className={styles.togetherWereMakingContainer}>
              <p className={styles.latestSportsUpdates}>
                Together, we’re making a difference by supporting charities that
                bring caring individuals together to uplift communities in need.
                Our mission is to address the challenges faced by underserved
                communities, and even a tiny step from us can create significant
                positive changes. We believe in ensuring every person has access
                to warm meals and clothing, especially children. Our goal is to
                eliminate hunger among kids and make a lasting impact. Join us
                in this noble cause and create a brighter future together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsContainer;
