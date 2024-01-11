import { useEffect } from "react";
import ContainerHeroForm from "../components/container-hero-form";
import MilestonesContainer from "../components/milestones-container";
import UltimateBettingSection from "../components/ultimate-betting-section";
import WhyChooseUsContainer from "../components/why-choose-us-container";
import ContainerCard1 from "../components/container-card1";
import DiscoverCardForm from "../components/discover-card-form";
import StayConnectedForm from "../components/stay-connected-form";
import styles from "./index.module.css";

const BJLive = () => {
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
      <div className={styles.mainPage}>
        <ContainerHeroForm />
        <MilestonesContainer />
        <UltimateBettingSection />
        <WhyChooseUsContainer />
        <ContainerCard1 />
        <DiscoverCardForm />
        <StayConnectedForm />
      </div>
    </div>
  );
};

export default BJLive;
