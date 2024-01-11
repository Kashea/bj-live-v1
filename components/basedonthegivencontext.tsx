import type { NextPage } from "next";
import styles from "./basedonthegivencontext.module.css";

const Basedonthegivencontext: NextPage = () => {
  return (
    <div className={styles.sponsorsWrapper}>
      <section className={styles.sponsors}>
        <img
          className={styles.logoJili1Icon}
          alt=""
          src="/logo-jili-1@2x.png"
        />
        <img
          className={styles.imageRemovebgPreview3Icon}
          alt=""
          src="/imageremovebgpreview-3@2x.png"
        />
        <img
          className={styles.imageRemovebgPreview2Icon}
          alt=""
          src="/imageremovebgpreview-2@2x.png"
        />
        <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
        <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
        <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
        <img
          className={styles.colorFill11}
          alt=""
          src="/color-fill-1-1@2x.png"
        />
      </section>
    </div>
  );
};

export default Basedonthegivencontext;
