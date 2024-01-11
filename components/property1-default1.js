import { useMemo } from "react";
import styles from "./property1-default1.module.css";

const Property1Default1 = ({
  frameDivBackgroundImage,
  frameDivBackgroundImage1,
  frameDivBackgroundImage2,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      backgroundImage: frameDivBackgroundImage,
    };
  }, [frameDivBackgroundImage]);

  const frameDiv4Style = useMemo(() => {
    return {
      backgroundImage: frameDivBackgroundImage1,
    };
  }, [frameDivBackgroundImage1]);

  const frameDiv5Style = useMemo(() => {
    return {
      backgroundImage: frameDivBackgroundImage2,
    };
  }, [frameDivBackgroundImage2]);

  return (
    <div className={styles.property1default}>
      <div className={styles.property1defaultInner} style={frameDiv3Style}>
        <div className={styles.groupParent}>
          <div className={styles.gladiators1Parent}>
            <img
              className={styles.gladiators1Icon}
              alt=""
              src="/gladiators-1@2x.png"
            />
            <img className={styles.abu1Icon} alt="" src="/abu-1@2x.png" />
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.principalSponsorOfDeccanGlParent}>
              <div className={styles.principalSponsorOf}>
                Principal Sponsor of Deccan Gladiators in Abu Dhabi T10 League
                2023
              </div>
              <div className={styles.groupChild} />
            </div>
            <div className={styles.aFormidableTeamContainer}>
              <ul className={styles.aFormidableTeamInTheAbuD}>
                <li className={styles.aFormidableTeam}>
                  A formidable team in the Abu Dhabi T10 League.
                </li>
                <li className={styles.aFormidableTeam}>
                  A dynamic team combining young talent with international
                  experience.
                </li>
                <li className={styles.aFormidableTeam}>
                  Features a roster of talented players, both local and
                  international.
                </li>
                <li className={styles.aFormidableTeam}>
                  Runner-up in 2019, followed by back-to-back wins during 2021
                  and 2022 in Abu Dhabi T10 League.
                </li>
              </ul>
              <p className={styles.excitedToJoin}>
                Excited to join forces with Deccan Gladiators as their Principal
                Sponsor in the Abu Dhabi T10 League 2023, a collaboration poised
                to redefine sporting excellence.
              </p>
              <p className={styles.excitedToJoin}>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.property1defaultChild} style={frameDiv4Style}>
        <img className={styles.frameChild} alt="" src="/rectangle-247@2x.png" />
      </div>
      <div className={styles.frameDiv} style={frameDiv5Style}>
        <img className={styles.frameItem} alt="" src="/rectangle-248@2x.png" />
      </div>
    </div>
  );
};

export default Property1Default1;
