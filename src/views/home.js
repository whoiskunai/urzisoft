import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Urzisoft Automation</title>
        <meta
          name="description"
          content="Urzisoft is an innovative API-driven bot designed to enhance your Fetlife experience by automating essential tasks such as liking and commenting."
        />
        <meta property="og:title" content="Urzisoft Automation" />
        <meta
          property="og:description"
          content="Urzisoft is an innovative API-driven bot designed to enhance your Fetlife experience by automating essential tasks such as liking and commenting."
        />
      </Helmet>
      <div className="home-section-separator">
        <img
          alt="image"
          src="/add%20a%20heading%20(4)-200h.png"
          className="home-image"
        />
      </div>
      <div className="home-container01">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading">
              Get exponential profits with the power of automation!
            </h1>
            <span className="home-text">
              Urzisoft is an innovative API-driven bot designed to enhance your
              Fetlife experience by automating essential tasks such as liking,
              commenting, following, and even providing automated responses to
              users, making your interaction on the platform more efficient. The
              end goal is to get as many fans as possible on your OnlyFans
              accounts.
            </span>
            <div className="home-cta-btn-container">
              <a href="#pricing" className="home-cta-btn Anchor button">
                <span className="home-text01">PRICING</span>
              </a>
              <a
                href="https://t.me/urzisoft"
                target="_blank"
                rel="noreferrer noopener"
                className="home-cta-btn1 button"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text02">
            <span className="home-text03">
              Level up your Fetlife engagement 
            </span>
            <span>with Urzisoft Automation Services</span>
            <br></br>
          </h2>
          <span className="home-text06">
            With Fetlife&apos;s extensive user database, our bot empowers you to
            precisely target male users based on specific criteria such as age,
            gender, and role, allowing you gain a bigger audience in record
            time, thus getting more subscribers on your OnlyFans accounts.
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon-container">
              <svg viewBox="0 0 1170.2857142857142 1024" className="home-icon">
                <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
            </div>
            <div className="home-content-container">
              <span className="home-heading1">Exponential Returns</span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-icon-container1">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M512 86q124 0 211 87t87 211q0 150-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
              </svg>
            </div>
            <div className="home-content-container1">
              <span className="home-heading2">Easy Setup Process</span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M512 256q70 0 120 50t50 120q0 54-64 111t-64 103h-84q0-46 20-79t44-48 44-37 20-50q0-34-26-59t-60-25-60 25-26 59h-84q0-70 50-120t120-50zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 768v-86h84v86h-84z"></path>
              </svg>
            </div>
            <div className="home-content-container2">
              <span className="home-heading3">Fast Customer Service</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-about">
        <div className="home-max-content-width-container">
          <div className="home-heading-container1">
            <h1 className="home-text07">How it works</h1>
          </div>
          <div className="home-content-container3">
            <div className="home-about-1">
              <div className="home-container02">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text08">
                  Our Fetlife Bot offers a range of powerful features, including
                  auto-following and commenting to enrich your interactions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-container03">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text09">
                  You can effortlessly target specific roles such as submissive
                  or dominant users, ensuring your connections align with your
                  preferences.
                </span>
              </div>
              <div className="home-container04">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text10">
                  Plus, with the ability to add your own proxies to each
                  account, your security and privacy are prioritized.
                </span>
              </div>
            </div>
            <div className="home-about-11">
              <div className="home-container05">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text11">
                  <span>
                    Every customer receives a user-friendly package containing a
                    file to unzip and a unique token to input into the bot,
                    enabling easy setup and use.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="Card-Text"></br>
                  <span className="Card-Text">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-container06">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text15">
                  The intuitive interface ensures a seamless experience, making
                  it hassle-free to get started and enjoy the bot&apos;s
                  capabilities.
                </span>
              </div>
              <div className="home-container07">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text16">
                  Results are dependent on each model. Based on her looks and
                  how much time you invest in each account your results may
                  vary.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-about1">
        <div className="home-max-content-width-container1">
          <div className="home-heading-container2">
            <h1 className="home-text17">Urzisoft&apos;s Features</h1>
          </div>
          <div className="home-content-container4">
            <div className="home-about-12">
              <div className="home-container08">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text18">
                  You can use the bot for an unlimited number of models, making
                  it a versatile and valuable tool for multiple content
                  creators.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text19">
                  You can add an unlimited number of accounts, with the
                  flexibility to include additional model slots as needed,
                  providing you with the freedom to manage multiple profiles
                  effortlessly.
                </span>
              </div>
              <div className="home-container10">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text20">
                  To maintain authenticity, you can input up to five comments,
                  and the bot will randomly select one of them for each
                  interaction. Additionally, it features an automatic stop
                  mechanism that halts its actions once it reaches the
                  predetermined limits you&apos;ve set, ensuring you have full
                  control over its activity.
                </span>
              </div>
            </div>
            <div className="home-about-13">
              <div className="home-container11">
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text21">
                  <span>
                    Additionally, your purchase includes a comprehensive setup
                    guide that offers expert insights on minimizing account
                    locks and provides valuable tips and tricks to boost your
                    subscriber count, ensuring a successful and hassle-free
                    experience.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="Card-Text"></br>
                  <span className="Card-Text">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-container12">
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text25">
                  Rest assured, we also provide guidance on setting up your
                  account to create the most genuine appearance possible,
                  helping you establish an authentic and engaging presence on
                  the platform.
                </span>
              </div>
              <div className="home-container13">
                <svg viewBox="0 0 1024 1024" className="home-icon28">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text26">
                  You can configure the bot with up to three message presets,
                  which it will automatically select to respond to other users.
                  Furthermore, it allows you to monitor the status of your
                  accounts, distinguishing between those that are active and
                  those that have been banned. This feature provides valuable
                  insights into the health of your accounts, helping you manage
                  them effectively.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="pricing" className="home-pricing">
        <div className="home-heading-container3">
          <h1 className="home-text27 Section-Heading">
            Urzisoft&apos;s Pricing
          </h1>
        </div>
        <div className="home-pricing-card-container">
          <div className="home-card3">
            <div className="home-card-heading">
              <span className="home-type Anchor">Full Package</span>
              <span className="home-price Section-Heading">
                URZISOFT PREMIUM
              </span>
            </div>
            <div className="home-card-content">
              <div className="home-container14">
                <span className="home-text28 Card-Text">Accounts</span>
                <span className="home-text29 Card-Text">UNLIMITED</span>
              </div>
              <div className="home-container15">
                <span className="home-text30">Models</span>
                <span className="home-text31 Card-Text">UNLIMITED</span>
              </div>
              <div className="home-container16">
                <span className="home-text32 Card-Text">
                  Step by Step Guide
                </span>
                <span className="home-text33 Card-Text">INCLUDED</span>
              </div>
              <div className="home-container17">
                <span className="home-text34 Card-Text">
                  Tracking and Automation
                </span>
                <span className="home-text35 Card-Text">INCLUDED</span>
              </div>
              <a
                href="https://t.me/urzisoft"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-container18">
                  <span className="home-text36">
                    <span>$500 / Month</span>
                    <br></br>
                    <span>Click here to c</span>
                    <span>ontact us on Telegram</span>
                    <br></br>
                    <span>for subscription.</span>
                    <br></br>
                    <span>@urzisoft</span>
                    <br></br>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon30">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="home-link1 Anchor">Urzisoft, 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
