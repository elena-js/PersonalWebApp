import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import huawei_logo from '../assets/huawei_logo.png';
import miriadax_logo from '../assets/miriadax_logo.png';
import coursera_logo from '../assets/coursera_logo.png';
import upm_logo from '../assets/upm_logo.png';
import IconDownArrow from "../assets/icon_down_arrow.svg?react";
import IconUpArrow from "../assets/icon_up_arrow.svg?react";
import '../styles/Courses.css';

function Courses() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const coursesRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
  if (expanded) {
    coursesRef.current?.scrollIntoView({ behavior: "smooth" });
  }
}, [expanded]);
  
  return (
    <div className='courses'>
      <div className={`courses-title ${expanded ? 'courses-expanded' : ''}`} onClick={() => setExpanded(prev => !prev)}>
        <h3 className='uppercase'>{t('courses.title')}</h3>
        <div className='expand-icon'>
          {expanded ? <IconUpArrow /> : <IconDownArrow />}
        </div>
      </div>
      { expanded && (
        <section className='courses-container' ref={coursesRef}>
          <div className='row-courses'>
            <div className='course-item'>
              <img src={huawei_logo} alt="Huawei Logo" />
              <div className='course-title'>
                <h4>{t('courses.huawei1.title')}</h4>
                <h5>{t('courses.huawei1.date')}</h5>
              </div>
            </div>
            <div className='course-item'>
              <img src={huawei_logo} alt="Huawei Logo" />
              <div className='course-title'>
                <h4>{t('courses.huawei2.title')}</h4>
                <h5>{t('courses.huawei2.date')}</h5>
              </div>
            </div>
            <div className='course-item'>
              <img src={huawei_logo} alt="Huawei Logo" />
              <div className='course-title'>
                <h4>{t('courses.huawei3.title')}</h4>
                <h5>{t('courses.huawei3.date')}</h5>
              </div>
            </div>
          </div>
          <div className='row-courses'>
            <div className='course-item'>
              <img src={miriadax_logo} alt="Miríadax Logo" />
              <div className='course-title'>
                <h4>{t('courses.miriadax.title')}</h4>
                <h5>{t('courses.miriadax.date')}</h5>
              </div>
            </div>
            <div className='course-item'>
              <img src={coursera_logo} alt="Coursera Logo" />
              <div className='course-title'>
                <h4>{t('courses.coursera.title')}</h4>
                <h5>{t('courses.coursera.date')}</h5>
              </div>
            </div>
          </div>
          <div className='row-courses'>
            <div className='course-item'>
              <img src={upm_logo} alt="UPM Logo" />
              <div className='course-title'>
                <h4>{t('courses.upm1.title')}</h4>
                <h5>{t('courses.upm1.date')}</h5>
              </div>
            </div>
            <div className='course-item'>
              <img src={upm_logo} alt="UPM Logo" />
              <div className='course-title'>
                <h4>{t('courses.upm2.title')}</h4>
                <h5>{t('courses.upm2.date')}</h5>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Courses;