import { useEffect } from "react";
import styles from "./container-hero-form.module.css";

const ContainerHeroForm = () => {
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
    <section className={styles.hero} id="hero">
      <div className={styles.world12Parent}>
        <img className={styles.world12Icon} alt="" src="/world1-2@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-5@2x.png"
            />
            <div className={styles.worldssNo1Parent}>
              <h2 className={styles.worldssNo1}>
                <span>{`WORLDS’S `}</span>
                <span className={styles.no1}>NO.1</span>
              </h2>
              <h1
                className={styles.bestOnlineBettingContainer}
                data-animate-on-scroll
              >
                <p className={styles.bestOnline}>BEST ONLINE</p>
                <p className={styles.bestOnline}>BETTING SITE</p>
              </h1>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.asiaParent}>
              <div className={styles.asia}>Asia</div>
              <div className={styles.frameContainer}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className={styles.cambodia}>Cambodia</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/ellipse-3@2x.png"
                  />
                  <div className={styles.cambodia}>Philippines</div>
                </div>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/ellipse-3@2x.png"
                  />
                  <div className={styles.cambodia}>Bangladesh</div>
                </div>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/ellipse-20@2x.png"
                  />
                  <div className={styles.cambodia}>Indonesia</div>
                </div>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/ellipse-2@2x.png"
                  />
                  <div className={styles.cambodia}>India</div>
                </div>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className={styles.cambodia}>Vietnam</div>
                </div>
                <div className={styles.ellipseParent2}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/ellipse-2@2x.png"
                  />
                  <div className={styles.cambodia}>Pakistan</div>
                </div>
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="/ellipse-19@2x.png"
                  />
                  <div className={styles.cambodia}>South Korea</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.northAmericaParent}>
                <div className={styles.northAmerica}>North America</div>
                <div className={styles.ellipseParent3}>
                  <img
                    className={styles.frameChild6}
                    alt=""
                    src="/ellipse-11@2x.png"
                  />
                  <div className={styles.canada}>Canada</div>
                </div>
              </div>
              <div className={styles.southAmericaParent}>
                <div className={styles.southAmerica}>South America</div>
                <div className={styles.ellipseParent4}>
                  <img
                    className={styles.frameChild6}
                    alt=""
                    src="/ellipse-12@2x.png"
                  />
                  <div className={styles.brazil}>Brazil</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerHeroForm;
