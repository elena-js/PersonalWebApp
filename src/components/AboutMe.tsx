import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../styles/AboutMe.css";

function AboutMe() {
  const { t } = useTranslation();
  const [openMoreBtn, setOpenMoreBtn] = useState(false);
  
  return (
    <div className="about-me">
      <div className="profile-container">
        <div className="profile card">
          <span>{t('about.profile.text1')}</span>
        </div>
        <div className="profile card">
          <span>{t('about.profile.text2')}</span>
        </div>
        <div className="profile card">
          <span>{t('about.profile.text3')}</span>
        </div>
        <div className="profile card">
          <span>{t('about.profile.text4')}</span>
        </div>
      </div>
      <div className="row-cards">
        <div className="international card">
          <h4>{t('about.international.title')}</h4>
          <ul>
            {(t('about.international.points', { returnObjects: true }) as string[]).map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="volunteering card">
          <h4>{t('about.volunteering.title')}</h4>
          <ul>
            {(t('about.volunteering.points', { returnObjects: true }) as string[]).map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="motivation card">
        <h4>{t('about.motivation.title')}</h4>
        <p>{t('about.motivation.text')}</p>
      </div>
      {/* <button className="more-btn" onClick={() => setOpenMoreBtn(true)}>
        {t('about.more-btn.title')}
      </button> */}
      {openMoreBtn && (
        <div className="modal-overlay" onClick={() => setOpenMoreBtn(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setOpenMoreBtn(false)}
            >✕</button>
            <p>{t('about.more-btn.text')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutMe;