import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./support-container.module.css";

type SupportContainerType = {
  imageId?: string;
  dimensionCode?: string;
  supportDescription?: string;
  customerSupportInfo?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const SupportContainer: NextPage<SupportContainerType> = ({
  imageId,
  dimensionCode,
  supportDescription,
  customerSupportInfo,
  propLeft,
}) => {
  const why21IconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.support}>
      <img className={styles.supportChild} alt="" src={imageId} />
      <img
        className={styles.why21Icon}
        alt=""
        src={dimensionCode}
        style={why21IconStyle}
      />
      <div className={styles.supportOur247CustomerContainer}>
        <p className={styles.supportOur247CustomerSup}>
          <b className={styles.support1}>
            <span className={styles.support2}>{supportDescription}</span>
            <span className={styles.blankLine}>&nbsp;</span>
          </b>
          <span>
            <span className={styles.blankLine1}>&nbsp;</span>
            <span>{customerSupportInfo}</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SupportContainer;
