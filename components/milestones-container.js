import Property1Default from "./property1-default";
import styles from "./milestones-container.module.css";

const MilestonesContainer = () => {
  return (
    <section className={styles.milestones} id="milestones">
      <img
        className={styles.milestonesChild}
        alt=""
        src="/rectangle-229@2x.png"
      />
      <section className={styles.milestonesParent} id="milestone">
        <h1 className={styles.milestones1}>Milestones</h1>
        <div className={styles.frameChild} />
        <Property1Default
          frameDivBackgroundImage="url('/frame-1091@3x.png')"
          frameDivBackgroundImage1="url('/frame-1101@3x.png')"
          frameDivBackgroundImage2="url('/frame-1111@3x.png')"
        />
      </section>
      <div className={styles.ellipseParent}>
        <img className={styles.frameItem} alt="" src="/ellipse-1@2x.png" />
        <img className={styles.frameItem} alt="" src="/ellipse-2@2x.png" />
        <img className={styles.frameItem} alt="" src="/ellipse-3@2x.png" />
        <img className={styles.frameItem} alt="" src="/ellipse-4@2x.png" />
        <img className={styles.frameItem} alt="" src="/ellipse-5@2x.png" />
        <img className={styles.frameItem} alt="" src="/ellipse-6@2x.png" />
        <img className={styles.frameItem} alt="" src="/ellipse-7@2x.png" />
      </div>
    </section>
  );
};

export default MilestonesContainer;
