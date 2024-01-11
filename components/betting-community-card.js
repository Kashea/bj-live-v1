import styles from "./betting-community-card.module.css";

const BettingCommunityCard = () => {
  return (
    <div className={styles.forum2}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-203@2x.png" />
        <div className={styles.bjcharity11Parent}>
          <img
            className={styles.bjcharity11Icon}
            alt=""
            src="/bjcharity1-1@2x.png"
          />
          <div className={styles.yourPremierOnlineBettingCoParent}>
            <b className={styles.yourPremierOnline}>
              Your premier online betting Community
            </b>
            <div className={styles.bjForumIsContainer}>
              <p className={styles.bjForumIs}>
                BJ Forum is your pathway to elevate your betting journey,
                fostering learning, connection, and aheightened betting
                experience. Join a vibrant gathering of bettors from around the
                globe, where insights, tips, and spirited discussion come
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingCommunityCard;
