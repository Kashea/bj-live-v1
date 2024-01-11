import type { NextPage } from "next";
import styles from "./stay-connected-section.module.css";

const StayConnectedSection: NextPage = () => {
  return (
    <section className={styles.footerInner} id="footer">
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-221@2x.png"
          />
          <div className={styles.stayConnected}>Stay Connected</div>
          <div className={styles.socialIconsParent}>
            <img
              className={styles.socialIcons}
              alt=""
              src="/social-icons.svg"
            />
            <img
              className={styles.socialIcons}
              alt=""
              src="/social-icons.svg"
            />
            <img
              className={styles.socialIcons}
              alt=""
              src="/social-icons.svg"
            />
            <img
              className={styles.socialIcons}
              alt=""
              src="/social-icons.svg"
            />
            <img
              className={styles.socialIcons}
              alt=""
              src="/social-icons.svg"
            />
          </div>
        </div>
        <div className={styles.quickLinksParent}>
          <div className={styles.quickLinks}>Quick Links</div>
          <div className={styles.homeMilestonesAboutContainer}>
            <p className={styles.home}>Home</p>
            <p className={styles.home}>Milestones</p>
            <p className={styles.home}>About</p>
            <p className={styles.locations}>Locations</p>
          </div>
        </div>
        <div className={styles.bj88Parent}>
          <div className={styles.quickLinks}>BJ | 88</div>
          <div className={styles.cambodiaVietnamPhilippinesContainer}>
            <p className={styles.home}>Cambodia</p>
            <p className={styles.home}>Vietnam</p>
            <p className={styles.home}>Philippines</p>
            <p className={styles.home}>{`Indonesia `}</p>
            <p className={styles.home}>{`Korea `}</p>
            <p className={styles.locations}>Canada</p>
          </div>
        </div>
        <div className={styles.bjBajiParent}>
          <div className={styles.quickLinks}>BJ | baji</div>
          <div className={styles.cambodiaVietnamPhilippinesContainer}>
            <p className={styles.home}>Bangladesh</p>
            <p className={styles.home}>India</p>
            <p className={styles.locations}>Pakistan</p>
          </div>
        </div>
        <div className={styles.bjBorajogarParent}>
          <div className={styles.quickLinks}>BJ | borajogar</div>
          <div className={styles.cambodiaVietnamPhilippinesContainer}>
            Brazil
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.responsibleGamingParent}>
            <div className={styles.quickLinks}>Responsible Gaming</div>
            <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
            <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
            <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
          </div>
          <div className={styles.gamingLicenseParent}>
            <div className={styles.gamingLicense}>Gaming License</div>
            <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayConnectedSection;
