import { useEffect } from "react";
import styles from "./discover-card-form.module.css";

const DiscoverCardForm = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <section className={styles.discover}>
      <img
        className={styles.discoverChild}
        alt=""
        src="/rectangle-238@2x.png"
      />
      <div className={styles.discoverInner}>
        <div className={styles.frameParent}>
          <div className={styles.groupParent}>
            <div className={styles.discoverParent}>
              <h1 className={styles.discover1}>DISCOVER</h1>
              <div className={styles.worldssNo1}>
                <span>{`WORLDS’S `}</span>
                <span className={styles.no1}>NO.1</span>
              </div>
            </div>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-250@2x.png"
            />
            <h1
              className={styles.bestOnlineBettingContainer}
              data-animate-on-scroll
            >
              <p className={styles.bestOnline}>BEST ONLINE</p>
              <p className={styles.bestOnline}>BETTING SITE</p>
            </h1>
          </div>
          <div className={styles.ellipseParent}>
            <img className={styles.frameItem} alt="" src="/ellipse-1@2x.png" />
            <img className={styles.frameItem} alt="" src="/ellipse-2@2x.png" />
            <img className={styles.frameItem} alt="" src="/ellipse-3@2x.png" />
            <img className={styles.frameItem} alt="" src="/ellipse-4@2x.png" />
            <img className={styles.frameItem} alt="" src="/ellipse-5@2x.png" />
            <img className={styles.frameItem} alt="" src="/ellipse-6@2x.png" />
            <img className={styles.frameItem} alt="" src="/ellipse-7@2x.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCardForm;
