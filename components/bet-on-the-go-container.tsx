import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./bet-on-the-go-container.module.css";

type BetOnTheGoContainerType = {
  imageDimensions?: string;
  bettingAppPromoImageUrl?: string;
  bettingAppPromoText?: string;
  bettingAppPromoImageUrls?: string;

  /** Style props */
  propJustifyContent?: CSSProperties["justifyContent"];
  propTop?: CSSProperties["top"];
  propTop1?: CSSProperties["top"];
  propHeight?: CSSProperties["height"];
};

const BetOnTheGoContainer: NextPage<BetOnTheGoContainerType> = ({
  imageDimensions,
  bettingAppPromoImageUrl,
  bettingAppPromoText,
  bettingAppPromoImageUrls,
  propJustifyContent,
  propTop,
  propTop1,
  propHeight,
}) => {
  const betOnTheGoStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
    };
  }, [propJustifyContent]);

  const why63IconStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const betOnTheContainerStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop1,
      height: propHeight,
    };
  }, [propTop1, propHeight]);

  return (
    <div className={styles.betOnTheGo} style={betOnTheGoStyle}>
      <img className={styles.betOnTheGoChild} alt="" src={imageDimensions} />
      <img
        className={styles.why63Icon}
        alt=""
        src={bettingAppPromoImageUrl}
        style={why63IconStyle}
      />
      <div className={styles.betOnTheContainer} style={betOnTheContainerStyle}>
        <p className={styles.betOnTheGoBjAppAllows}>
          <b className={styles.betOnTheGo1}>
            <span className={styles.betOnThe}>{bettingAppPromoText}</span>
            <span className={styles.blankLine}>&nbsp;</span>
          </b>
          <span>
            <span className={styles.blankLine1}>&nbsp;</span>
            <span>{bettingAppPromoImageUrls}</span>
          </span>
        </p>
        <p className={styles.betOnTheGoBjAppAllows}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default BetOnTheGoContainer;
