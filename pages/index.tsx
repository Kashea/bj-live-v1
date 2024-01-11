import type { NextPage } from "next";
import { useEffect } from "react";
import ContainerHeroForm from "../components/container-hero-form";
import MilestonesContainer from "../components/milestones-container";
import UltimateBettingSection from "../components/ultimate-betting-section";
import WhyChooseUsContainer from "../components/why-choose-us-container";
import ContainerCard from "../components/container-card";
import DiscoverCardForm from "../components/discover-card-form";
import Basedonthegivencontext from "../components/basedonthegivencontext";
import StayConnectedSection from "../components/stay-connected-section";
import styles from "./index.module.css";

const BJLive: NextPage = () => {
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
    <div className={styles.bjlive} data-animate-on-scroll>
      <ContainerHeroForm />
      <MilestonesContainer />
      <UltimateBettingSection />
      <WhyChooseUsContainer />
      <ContainerCard />
      <DiscoverCardForm />
      <section className={styles.footer} id="footer">
        <Basedonthegivencontext />
        <StayConnectedSection />
        <section
          className={styles.yourUltimateAllInOneOnlinWrapper}
          id="footer01"
        >
          <div className={styles.yourUltimateAllInOneContainer}>
            <p className={styles.yourUltimateAllInOne}>
              Your Ultimate All-In-One Online Betting Destination
            </p>
            <p className={styles.blankLine}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.lookingForAnUnparalleledOn}>
              <span>
                <span>
                  Looking for an unparalleled online betting experience that
                  delivers excitement, variety, and top-notch security? Look no
                  further than bj, Asia's No.1 most trusted online betting site!
                  With a reputation built on trust and excellence, bj brings you
                  a world of opportunities to win big and have a blast!bj offers
                  an extensive array of sports events, ranging from cricket and
                  football to badminton, kabaddi, cockfight, and many more. Our
                  high odds ensure that you have the chance to amplify your wins
                  and maximise your excitement with every game!But that's not
                  all – bj takes your entertainment to the next level with a
                  diverse selection of exciting gaming products, including
                  slots, live casino, table games, fishing games, poker, and
                  more, all in one place!Navigating the bj platform is a breeze,
                  thanks to our user-friendly interface. Whether you're a
                  seasoned bettor or a newcomer, you'll find it easy to explore
                  and enjoy all the offerings. And rest assured, your safety is
                  our priority. With top-notch security measures in place, you
                  can focus on the fun without any worries. We promise to keep
                  all of your information strictly confidential and private.At
                  bj, the excitement never stops. Our range of promotions and
                  free bonuses adds extra value to your betting and gaming
                  endeavours, boosting your chances to win big. Plus, our
                  dedicated 24/7 customer support is always ready to assist you,
                  ensuring that your experience remains smooth and
                  enjoyable.Join bj today and experience the ultimate fusion of
                  sports betting and casino entertainment, all backed by trust,
                  variety, security, and a commitment to your satisfaction.
                </span>
              </span>
            </p>
          </div>
        </section>
      </section>
      <header className={styles.navigation} id="BJheader">
        <img className={styles.bjLogoBw} alt="" src="/bj-logo-bw@2x.png" />
        <div className={styles.navBar}>
          <div className={styles.home}>HOME</div>
          <div className={styles.navBarChild} />
          <div className={styles.home}>MILESTONES</div>
          <div className={styles.navBarChild} />
          <div className={styles.home}>ABOUT</div>
          <div className={styles.navBarChild} />
          <div className={styles.home}>LOCATIONS</div>
        </div>
      </header>
    </div>
  );
};

export default BJLive;
