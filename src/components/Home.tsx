import "../styles/Home.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import Timeline from "./Timeline";
import IconDownArrow from "../assets/icon_down_arrow.svg?react";
import IconUpArrow from "../assets/icon_up_arrow.svg?react";

function Home() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLElement | null>(null);
  const goToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section ref={heroRef} className="home">
        <div className="home-content">
          <h1 className="home-title">{t('home.title')}</h1>
          <h2 className="home-subtitle">
            {t('home.subtitle')}
          </h2>
          <p className="home-text">
            {t('home.text')}
          </p>
          <button className="scroll-button" onClick={goToTimeline}>
            <IconDownArrow className="scroll-icon" />
          </button>
        </div>
      </section>

      <section ref={timelineRef} className="home-timeline-anchor">
        <div className="timeline-header">
          <button className="scroll-button" onClick={goToHero}>
            <IconUpArrow className="scroll-icon" />
          </button>
          <h3 className="timeline-title">{t('timeline.title')}</h3>
          <p className="timeline-subtitle">
            {t('timeline.subtitle')}
          </p>          
        </div>
        <Timeline />
      </section>
    </>
  );
}

export default Home;