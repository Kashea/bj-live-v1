import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./property1-default.module.css";

type Property1DefaultType = {
  /** Style props */
  property1DefaultWidth?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  frameDivBackgroundImage?: CSSProperties["backgroundImage"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
  groupDivWidth?: CSSProperties["width"];
  groupDivHeight?: CSSProperties["height"];
  gladiators1IconTop?: CSSProperties["top"];
  gladiators1IconLeft?: CSSProperties["left"];
  gladiators1IconWidth?: CSSProperties["width"];
  gladiators1IconHeight?: CSSProperties["height"];
  abu1IconTop?: CSSProperties["top"];
  abu1IconLeft?: CSSProperties["left"];
  abu1IconWidth?: CSSProperties["width"];
  abu1IconHeight?: CSSProperties["height"];
  groupDivWidth1?: CSSProperties["width"];
  groupDivHeight1?: CSSProperties["height"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
  groupDivWidth2?: CSSProperties["width"];
  groupDivHeight2?: CSSProperties["height"];
  principalSponsorOfTop?: CSSProperties["top"];
  principalSponsorOfLeft?: CSSProperties["left"];
  principalSponsorOfWidth?: CSSProperties["width"];
  principalSponsorOfHeight?: CSSProperties["height"];
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivLeft?: CSSProperties["left"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivHeight?: CSSProperties["height"];
  aFormidableTeamContainerTop?: CSSProperties["top"];
  aFormidableTeamContainerLeft?: CSSProperties["left"];
  aFormidableTeamContainerWidth?: CSSProperties["width"];
  aFormidableTeamMarginBottom?: CSSProperties["marginBottom"];
  aDynamicTeamMarginBottom?: CSSProperties["marginBottom"];
  featuresARosterMarginBottom?: CSSProperties["marginBottom"];
  runnerUpIn2019MarginBottom?: CSSProperties["marginBottom"];
  frameDivWidth?: CSSProperties["width"];
  frameDivHeight1?: CSSProperties["height"];
  frameDivBackgroundImage1?: CSSProperties["backgroundImage"];
  rectangleIconTop?: CSSProperties["top"];
  rectangleIconWidth?: CSSProperties["width"];
  rectangleIconHeight?: CSSProperties["height"];
  frameDivWidth1?: CSSProperties["width"];
  frameDivHeight2?: CSSProperties["height"];
  frameDivBackgroundImage2?: CSSProperties["backgroundImage"];
  rectangleIconTop1?: CSSProperties["top"];
  rectangleIconWidth1?: CSSProperties["width"];
  rectangleIconHeight1?: CSSProperties["height"];
};

const Property1Default: NextPage<Property1DefaultType> = ({
  property1DefaultWidth,
  frameDivHeight,
  frameDivBackgroundImage,
  frameDivTop,
  frameDivLeft,
  groupDivWidth,
  groupDivHeight,
  gladiators1IconTop,
  gladiators1IconLeft,
  gladiators1IconWidth,
  gladiators1IconHeight,
  abu1IconTop,
  abu1IconLeft,
  abu1IconWidth,
  abu1IconHeight,
  groupDivWidth1,
  groupDivHeight1,
  groupDivTop,
  groupDivLeft,
  groupDivWidth2,
  groupDivHeight2,
  principalSponsorOfTop,
  principalSponsorOfLeft,
  principalSponsorOfWidth,
  principalSponsorOfHeight,
  rectangleDivTop,
  rectangleDivLeft,
  rectangleDivWidth,
  rectangleDivHeight,
  aFormidableTeamContainerTop,
  aFormidableTeamContainerLeft,
  aFormidableTeamContainerWidth,
  aFormidableTeamMarginBottom,
  aDynamicTeamMarginBottom,
  featuresARosterMarginBottom,
  runnerUpIn2019MarginBottom,
  frameDivWidth,
  frameDivHeight1,
  frameDivBackgroundImage1,
  rectangleIconTop,
  rectangleIconWidth,
  rectangleIconHeight,
  frameDivWidth1,
  frameDivHeight2,
  frameDivBackgroundImage2,
  rectangleIconTop1,
  rectangleIconWidth1,
  rectangleIconHeight1,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      width: property1DefaultWidth,
    };
  }, [property1DefaultWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: frameDivHeight,
      backgroundImage: frameDivBackgroundImage,
    };
  }, [frameDivHeight, frameDivBackgroundImage]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth,
      height: groupDivHeight,
    };
  }, [groupDivWidth, groupDivHeight]);

  const gladiators1IconStyle: CSSProperties = useMemo(() => {
    return {
      top: gladiators1IconTop,
      left: gladiators1IconLeft,
      width: gladiators1IconWidth,
      height: gladiators1IconHeight,
    };
  }, [
    gladiators1IconTop,
    gladiators1IconLeft,
    gladiators1IconWidth,
    gladiators1IconHeight,
  ]);

  const abu1IconStyle: CSSProperties = useMemo(() => {
    return {
      top: abu1IconTop,
      left: abu1IconLeft,
      width: abu1IconWidth,
      height: abu1IconHeight,
    };
  }, [abu1IconTop, abu1IconLeft, abu1IconWidth, abu1IconHeight]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth1,
      height: groupDivHeight1,
    };
  }, [groupDivWidth1, groupDivHeight1]);

  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      top: groupDivTop,
      left: groupDivLeft,
      width: groupDivWidth2,
      height: groupDivHeight2,
    };
  }, [groupDivTop, groupDivLeft, groupDivWidth2, groupDivHeight2]);

  const principalSponsorOfStyle: CSSProperties = useMemo(() => {
    return {
      top: principalSponsorOfTop,
      left: principalSponsorOfLeft,
      width: principalSponsorOfWidth,
      height: principalSponsorOfHeight,
    };
  }, [
    principalSponsorOfTop,
    principalSponsorOfLeft,
    principalSponsorOfWidth,
    principalSponsorOfHeight,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      top: rectangleDivTop,
      left: rectangleDivLeft,
      width: rectangleDivWidth,
      height: rectangleDivHeight,
    };
  }, [
    rectangleDivTop,
    rectangleDivLeft,
    rectangleDivWidth,
    rectangleDivHeight,
  ]);

  const aFormidableTeamContainerStyle: CSSProperties = useMemo(() => {
    return {
      top: aFormidableTeamContainerTop,
      left: aFormidableTeamContainerLeft,
      width: aFormidableTeamContainerWidth,
    };
  }, [
    aFormidableTeamContainerTop,
    aFormidableTeamContainerLeft,
    aFormidableTeamContainerWidth,
  ]);

  const aFormidableTeamStyle: CSSProperties = useMemo(() => {
    return {
      marginBottom: aFormidableTeamMarginBottom,
    };
  }, [aFormidableTeamMarginBottom]);

  const aDynamicTeamStyle: CSSProperties = useMemo(() => {
    return {
      marginBottom: aDynamicTeamMarginBottom,
    };
  }, [aDynamicTeamMarginBottom]);

  const featuresARosterStyle: CSSProperties = useMemo(() => {
    return {
      marginBottom: featuresARosterMarginBottom,
    };
  }, [featuresARosterMarginBottom]);

  const runnerUpIn2019Style: CSSProperties = useMemo(() => {
    return {
      marginBottom: runnerUpIn2019MarginBottom,
    };
  }, [runnerUpIn2019MarginBottom]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight1,
      backgroundImage: frameDivBackgroundImage1,
    };
  }, [frameDivWidth, frameDivHeight1, frameDivBackgroundImage1]);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      top: rectangleIconTop,
      width: rectangleIconWidth,
      height: rectangleIconHeight,
    };
  }, [rectangleIconTop, rectangleIconWidth, rectangleIconHeight]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth1,
      height: frameDivHeight2,
      backgroundImage: frameDivBackgroundImage2,
    };
  }, [frameDivWidth1, frameDivHeight2, frameDivBackgroundImage2]);

  const rectangleIcon1Style: CSSProperties = useMemo(() => {
    return {
      top: rectangleIconTop1,
      width: rectangleIconWidth1,
      height: rectangleIconHeight1,
    };
  }, [rectangleIconTop1, rectangleIconWidth1, rectangleIconHeight1]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.property1defaultInner} style={frameDivStyle}>
        <div className={styles.groupParent} style={frameDiv1Style}>
          <div className={styles.gladiators1Parent} style={groupDivStyle}>
            <img
              className={styles.gladiators1Icon}
              alt=""
              src="/gladiators-1@2x.png"
              style={gladiators1IconStyle}
            />
            <img
              className={styles.abu1Icon}
              alt=""
              src="/abu-1@2x.png"
              style={abu1IconStyle}
            />
          </div>
          <div className={styles.groupContainer} style={groupDiv1Style}>
            <div
              className={styles.principalSponsorOfDeccanGlParent}
              style={groupDiv2Style}
            >
              <div
                className={styles.principalSponsorOf}
                style={principalSponsorOfStyle}
              >
                Principal Sponsor of Deccan Gladiators in Abu Dhabi T10 League
                2023
              </div>
              <div className={styles.groupChild} style={rectangleDivStyle} />
            </div>
            <div
              className={styles.aFormidableTeamContainer}
              style={aFormidableTeamContainerStyle}
            >
              <ul className={styles.aFormidableTeamInTheAbuD}>
                <li
                  className={styles.aFormidableTeam}
                  style={aFormidableTeamStyle}
                >
                  A formidable team in the Abu Dhabi T10 League.
                </li>
                <li
                  className={styles.aFormidableTeam}
                  style={aDynamicTeamStyle}
                >
                  A dynamic team combining young talent with international
                  experience.
                </li>
                <li
                  className={styles.aFormidableTeam}
                  style={featuresARosterStyle}
                >
                  Features a roster of talented players, both local and
                  international.
                </li>
                <li
                  className={styles.aFormidableTeam}
                  style={runnerUpIn2019Style}
                >
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
      <div className={styles.property1defaultChild} style={frameDiv2Style}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-247@2x.png"
          style={rectangleIconStyle}
        />
      </div>
      <div className={styles.frameDiv} style={frameDiv3Style}>
        <img
          className={styles.frameItem}
          alt=""
          src="/rectangle-248@2x.png"
          style={rectangleIcon1Style}
        />
      </div>
    </div>
  );
};

export default Property1Default;
