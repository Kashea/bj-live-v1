import type { NextPage } from "next";
import Property1Default from "./property1-default";
import styles from "./milestones-container.module.css";

const MilestonesContainer: NextPage = () => {
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
          property1DefaultWidth="81.06rem"
          frameDivHeight="37.06rem"
          frameDivBackgroundImage="url('/frame-1091@3x.png')"
          frameDivTop="7.19rem"
          frameDivLeft="5.56rem"
          groupDivWidth="15.06rem"
          groupDivHeight="5.56rem"
          gladiators1IconTop="0rem"
          gladiators1IconLeft="0rem"
          gladiators1IconWidth="5.63rem"
          gladiators1IconHeight="5.56rem"
          abu1IconTop="0rem"
          abu1IconLeft="7.06rem"
          abu1IconWidth="8rem"
          abu1IconHeight="4.88rem"
          groupDivWidth1="17.06rem"
          groupDivHeight1="14.88rem"
          groupDivTop="0rem"
          groupDivLeft="0rem"
          groupDivWidth2="16rem"
          groupDivHeight2="5.13rem"
          principalSponsorOfTop="0rem"
          principalSponsorOfLeft="1.31rem"
          principalSponsorOfWidth="14.69rem"
          principalSponsorOfHeight="5.13rem"
          rectangleDivTop="0.31rem"
          rectangleDivLeft="0rem"
          rectangleDivWidth="0.44rem"
          rectangleDivHeight="3.88rem"
          aFormidableTeamContainerTop="5.13rem"
          aFormidableTeamContainerLeft="0.81rem"
          aFormidableTeamContainerWidth="16.25rem"
          aFormidableTeamMarginBottom="false"
          aDynamicTeamMarginBottom="false"
          featuresARosterMarginBottom="false"
          runnerUpIn2019MarginBottom="false"
          frameDivWidth="10.88rem"
          frameDivHeight1="30.75rem"
          frameDivBackgroundImage1="url('/frame-1101@3x.png')"
          rectangleIconTop="9.16rem"
          rectangleIconWidth="5.25rem"
          rectangleIconHeight="10.63rem"
          frameDivWidth1="10.88rem"
          frameDivHeight2="30.75rem"
          frameDivBackgroundImage2="url('/frame-1111@3x.png')"
          rectangleIconTop1="10.09rem"
          rectangleIconWidth1="6.81rem"
          rectangleIconHeight1="10.63rem"
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
