import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="portfolio-hero">
      <div className="portfolio-shell hero-layout">
        <div className="hero-copy">
          <p className="portfolio-kicker">Android Developer</p>
          <h1>Usama <span>Mansoor</span></h1>
          <p className="hero-intro">
            I build Android apps with Kotlin and Jetpack Compose and use Kotlin
            Multiplatform to share code across Android and iOS.
          </p>
          <div className="portfolio-actions">
            <a className="portfolio-button" href="#contact">
              <span className="portfolio-button-face">
                Contact me <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </a>
            <a className="portfolio-text-link" href="#experience">
              Get to know me <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="portfolio-status">
            <span aria-hidden="true" /> Open to remote Android roles
          </p>
        </div>

        <div className="device-stage" aria-hidden="true">
          <div className="device-orbit" />
          <div className="device">
            <div className="device-rail" />
            <div className="device-screen">
              <div className="device-camera" />
              <span className="device-label">MOBILE DEVELOPMENT</span>
              <div className="device-art">
                <i /><i /><i />
              </div>
              <div className="device-title">Android<br />&amp; iOS</div>
              <div className="device-platforms">
                <span>Jetpack Compose</span>
                <span>Kotlin Multiplatform</span>
              </div>
              <div className="device-gesture" />
              <div className="device-sheen" />
            </div>
          </div>
          <span className="device-tag device-tag-top"><i /> KOTLIN</span>
          <span className="device-tag device-tag-bottom"><i /> ANDROID + iOS</span>
        </div>
      </div>
      <div className="portfolio-shell hero-index" aria-hidden="true">
        <span>ANDROID / MOBILE</span><span>KOTLIN • COMPOSE • KMP</span>
      </div>
    </section>
  );
};

export default Hero;
