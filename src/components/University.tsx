import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import upm_logo from '../assets/upm_logo.png';
import etsit_logo from '../assets/etsit_logo.png';
import IconDownArrow from "../assets/icon_down_arrow.svg?react";
import IconUpArrow from "../assets/icon_up_arrow.svg?react";
import '../styles/University.css';

function University() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState({ area1: false, area2: false, area3: false, area4: false, area5: false });

  return (
    <div className='university'>
      <div className='university-container'>
        <div className='degree-item'>
          <div className='university-item'>
            <img src={upm_logo} alt="UPM Logo" />
            <div className='degree-title'>
              <h3>{t('university.master.title')}</h3>
              <h4>{t('university.master.date')}</h4>
            </div>
            <img src={etsit_logo} alt="ETSIT Logo" />
          </div>
          <ul className='university-details'>
            {(t('university.master.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>

        <div className='degree-item'>
          <div className='university-item'>
            <img src={upm_logo} alt="UPM Logo" />
            <div className='degree-title'>
              <h3>{t('university.bachelor.title')}</h3>
              <h4>{t('university.bachelor.date')}</h4>
            </div>
            <img src={etsit_logo} alt="ETSIT Logo" />
          </div>
          <ul className='university-details'>
            {(t('university.bachelor.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      </div>

      <div className='degrees-explanation'>
        <h3>{t('university.study-areas.title')}</h3>
        <div className={`study-area-title ${expanded.area1 ? 'title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, area1: !prev.area1 }))}>
          <p>{t('university.study-areas.area1.title')}</p>
          <div className='expand-icon'>
            {expanded.area1 ? <IconUpArrow /> : <IconDownArrow />}
          </div>
        </div>
        {expanded.area1 && (
          <ul className='study-area-details'>
            {(t('university.study-areas.area1.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        <div className={`study-area-title ${expanded.area2 ? 'title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, area2: !prev.area2 }))}>
          <p>{t('university.study-areas.area2.title')}</p>
          <div className='expand-icon'>
            {expanded.area2 ? <IconUpArrow /> : <IconDownArrow />}
          </div>
        </div>
        {expanded.area2 && (
          <ul className='study-area-details'>
            {(t('university.study-areas.area2.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        <div className={`study-area-title ${expanded.area3 ? 'title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, area3: !prev.area3 }))}>
          <p>{t('university.study-areas.area3.title')}</p>
          <div className='expand-icon'>
            {expanded.area3 ? <IconUpArrow /> : <IconDownArrow />}
          </div>
        </div>
        {expanded.area3 && (
          <ul className='study-area-details'>
            {(t('university.study-areas.area3.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        <div className={`study-area-title ${expanded.area4 ? 'title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, area4: !prev.area4 }))}>
          <p>{t('university.study-areas.area4.title')}</p>
          <div className='expand-icon'>
            {expanded.area4 ? <IconUpArrow /> : <IconDownArrow />}
          </div>
        </div>
        {expanded.area4 && (
          <ul className='study-area-details'>
            {(t('university.study-areas.area4.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        <div className={`study-area-title ${expanded.area5 ? 'title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, area5: !prev.area5 }))}>
          <p>{t('university.study-areas.area5.title')}</p>
          <div className='expand-icon'>
            {expanded.area5 ? <IconUpArrow /> : <IconDownArrow />}
          </div>
        </div>
        {expanded.area5 && (
          <ul className='study-area-details'>
            {(t('university.study-areas.area5.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default University;