import type { NextPage } from "next";
import SupportContainer from "./support-container";
import BetOnTheGoContainer from "./bet-on-the-go-container";
import styles from "./why-choose-us-container.module.css";

const WhyChooseUsContainer: NextPage = () => {
  return (
    <section className={styles.whyus} id="whychooseus">
      <img className={styles.whyusChild} alt="" src="/rectangle-237@2x.png" />
      <div className={styles.titleAbout1}>
        <h1 className={styles.whyChooseUs}>Why Choose Us?</h1>
        <div className={styles.titleAbout1Child} />
      </div>
      <div className={styles.easyTransactionsParent}>
        <div className={styles.easyTransactions}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-199@2x.png"
            />
            <img className={styles.why11Icon} alt="" src="/why1-1@2x.png" />
            <div className={styles.easyTransactionsWeProvideContainer}>
              <p className={styles.easyTransactionsWeProvide}>
                <b className={styles.easyTransactions1}>
                  <span className={styles.easyTransactions2}>
                    Easy Transactions
                  </span>
                  <span className={styles.blankLine}>&nbsp;</span>
                </b>
                <span>
                  <span className={styles.blankLine1}>&nbsp;</span>
                  <span>
                    We provide a wide selection of the fastest and most secure
                    payment gateways. You can enjoy hassle-free deposit and
                    withdrawal transactions in the most convenient way!
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <SupportContainer
          imageId="/rectangle-200@2x.png"
          dimensionCode="/why2-1@2x.png"
          supportDescription="24/7 Support"
          customerSupportInfo="Our 24/7 customer support team is always here to assist you with any inquiries in different languages. Reach us anytime, anywhere, with a great and smooth live chat experience."
          propLeft="7.38rem"
        />
        <div className={styles.promotionsBonuses}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-201@2x.png"
          />
          <img className={styles.why32Icon} alt="" src="/why3-2@2x.png" />
          <div className={styles.promotionsBonusesWeContainer}>
            <p className={styles.easyTransactionsWeProvide}>
              <b className={styles.easyTransactions1}>
                <span
                  className={styles.promotionsBonuses2}
                >{`Promotions & Bonuses`}</span>
                <span className={styles.blankLine}>&nbsp;</span>
              </b>
              <span>
                <span className={styles.blankLine1}>&nbsp;</span>
                <span>{`We will launch promotions that come with exciting rewards & bonuses from time to time! Always getting extra bonuses and winning big is one of the biggest perks on bj!`}</span>
              </span>
            </p>
            <p className={styles.easyTransactionsWeProvide}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
          </div>
        </div>
        <SupportContainer
          imageId="/rectangle-202@2x.png"
          dimensionCode="/why4-1@2x.png"
          supportDescription="Multi-Region"
          customerSupportInfo="Our current available markets are Bangladesh, India, Pakistan, Vietnam, Cambodia, and Brazil! We are rapidly expanding to more regions across the world! There’ll be more markets coming!"
          propLeft="6.63rem"
        />
        <div className={styles.wideGamesVariation}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-203@2x.png"
          />
          <img className={styles.why51Icon} alt="" src="/why5-1@2x.png" />
          <div className={styles.wideGamesVariationWeContainer}>
            <p className={styles.easyTransactionsWeProvide}>
              <b>
                <span>Wide Games Variation</span>
              </b>
            </p>
            <p className={styles.blankLine5}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.weProvideThousandsOfExciti}>
              <span>
                <span>
                  We provide thousands of exciting games for you to play on! New
                  games from plenty of popular gaming providers will be added
                  constantly!
                </span>
              </span>
            </p>
          </div>
        </div>
        <BetOnTheGoContainer
          imageDimensions="/rectangle-204@2x.png"
          bettingAppPromoImageUrl="/why6-3@2x.png"
          bettingAppPromoText="Bet On The Go "
          bettingAppPromoImageUrls="bj APP allows you to earn instantly through betting on the go and check on live score updates anywhere, anytime, with just your mobile devices! "
          propJustifyContent="flex-start"
          propTop="2.94rem"
          propTop1="9.63rem"
          propHeight="10.75rem"
        />
        <div className={styles.promotionsBonuses}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-205@2x.png"
          />
          <img className={styles.why12Icon} alt="" src="/why1-2@2x.png" />
          <div className={styles.securityPrivacyWithContainer}>
            <p className={styles.easyTransactionsWeProvide}>
              <b className={styles.easyTransactions1}>
                <span
                  className={styles.promotionsBonuses2}
                >{`Security & Privacy`}</span>
                <span className={styles.blankLine}>&nbsp;</span>
              </b>
              <span>
                <span className={styles.blankLine1}>&nbsp;</span>
                <span>
                  With us, you can always play with no worries as your privacy
                  is always our top priority. bj uses a top-notch security
                  system together with a 128-bit encryption to ensure all your
                  transactions as well as the privacy of your data are safe and
                  secure.
                </span>
              </span>
            </p>
          </div>
        </div>
        <BetOnTheGoContainer
          imageDimensions="/rectangle-206@2x.png"
          bettingAppPromoImageUrl="/why3-3@2x.png"
          bettingAppPromoText="Sharp Odds"
          bettingAppPromoImageUrls="Support your favourite teams on any sports events with the most competitive odds on bj all the time!"
          propJustifyContent="center"
          propTop="3.06rem"
          propTop1="9.88rem"
          propHeight="10.06rem"
        />
      </div>
    </section>
  );
};

export default WhyChooseUsContainer;
