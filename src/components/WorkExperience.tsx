import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/WorkExperience.css';
import gmv_logo from '../assets/gmv_logo.png';
import satec_logo from '../assets/satec_logo.png';
import IconDownArrow from "../assets/icon_down_arrow.svg?react";
import IconUpArrow from "../assets/icon_up_arrow.svg?react";

function WorkExperience() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState({ gmv: false, satec: false });

  return (
    <div className='work-experience'>
      <div className='work-item'>
        <div className={`experience-item ${expanded.gmv ? 'title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, gmv: !prev.gmv }))}>
          <img src={gmv_logo} alt="GMV Logo" />
          <div className='experience-title'>
            <h3>{t('work.gmv.title')}</h3>
            <h4>{t('work.gmv.date')}</h4>
            <div className='expand-icon'>
              {expanded.gmv ? <IconUpArrow /> : <IconDownArrow />}
            </div>
          </div>
        </div>
        <div className={`content ${expanded.gmv ? 'expanded' : ''}`}>
          {expanded.gmv ? (
            <ul>
              {(t('work.gmv.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          ) : (
            <p>{t('work.gmv.resume')}</p>
          )}
        </div>
      </div>
      <div className='work-item'>
        <div className={`experience-item ${expanded.satec ? 'title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, satec: !prev.satec }))}>
          <img src={satec_logo} alt="SATEC Logo" />
          <div className='experience-title'>
            <h3>{t('work.satec.title')}</h3>
            <h4>{t('work.satec.date')}</h4>
            <div className='expand-icon'>
              {expanded.satec ? <IconUpArrow /> : <IconDownArrow />}
            </div>
          </div>
        </div>
        <div className={`content ${expanded.satec ? 'expanded' : ''} last`}>
          {expanded.satec ? (
            <ul>
              {(t('work.satec.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{t('work.satec.resume')}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;