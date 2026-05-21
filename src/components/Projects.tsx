import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import IconUpArrow from "../assets/icon_up_arrow.svg?react";
import IconDownArrow from "../assets/icon_down_arrow.svg?react";
import '../styles/Projects.css';

function Projects() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState({ tfgArea3: false, tfgArea4: false, tfgArea5: false, tfmArea3: false, tfmArea4: false, tfmArea5: false, tfmArea6: false });

  return (
    <div className="projects">
      <div className="project-container">
        <h1 className='project-title'>
          <span>{t('projects.tfg.title')}</span>
        </h1>
        <div className='project-intro'>
          <ul>
            {(t('projects.tfg.section1.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
        <div className='technologies'>
          <h3>{t('projects.tfg.section2.title')}</h3>
          <div className='technologies-chips'>
            {(t('projects.tfg.section2.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </div>
        </div>
        <div className='pipeline'>
          <div className={`project-area-title ${expanded.tfgArea3 ? 'project-title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, tfgArea3: !prev.tfgArea3 }))}>
            <p>{t('projects.tfg.section3.title')}</p>
            <div className='expand-icon'>
              {expanded.tfgArea3 ? <IconUpArrow /> : <IconDownArrow />}
            </div>
          </div>
          {expanded.tfgArea3 && (
            <div className='pipeline-chips'>
              <span>{t('projects.tfg.section3.phase1')}</span>
              <span>{t('projects.tfg.section3.phase2')}</span>
              <span>{t('projects.tfg.section3.phase3')}</span>
              <span>{t('projects.tfg.section3.phase4')}</span>
              <span>{t('projects.tfg.section3.phase5')}</span>
            </div>
          )}
        </div>
        <div className='results'>
          <div className={`project-area-title ${expanded.tfgArea4 ? 'project-title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, tfgArea4: !prev.tfgArea4 }))}>
            <p>{t('projects.tfg.section4.title')}</p>
            <div className='expand-icon'>
              {expanded.tfgArea4 ? <IconUpArrow /> : <IconDownArrow />}
            </div>
          </div>
          {expanded.tfgArea4 && (
            <div className='results-points'>
              {(t('projects.tfg.section4.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                <span key={index} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </div>
          )}
        </div>
        <div className='results'>
          <div className={`project-area-title ${expanded.tfgArea5 ? 'project-title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, tfgArea5: !prev.tfgArea5 }))}>
            <p>{t('projects.tfg.section5.title')}</p>
            <div className='expand-icon'>
              {expanded.tfgArea5 ? <IconUpArrow /> : <IconDownArrow />}
            </div>
          </div>
          {expanded.tfgArea5 && (
            <div className='results-points'>
              <span>{t('projects.tfg.section5.point1')}</span>
              <span>{t('projects.tfg.section5.point2')}</span>
              <div className="lines"></div>
              <div className='points2'>
                <span>{t('projects.tfg.section5.point21')}</span>
                <span>{t('projects.tfg.section5.point22')}</span>
                <svg className="connections" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="50" y1="0" x2="25" y2="100" />
                  <line x1="50" y1="0" x2="75" y2="100" />
                </svg>
              </div>
              <span>{t('projects.tfg.section5.point3')}</span>
            </div>
          )}
        </div>
      </div>

      <div className="project-container">
        <h1 className='project-title'>
          <span>{t('projects.tfm.title')}</span>
        </h1>
        <div className='project-intro'>
          <ul>
            {(t('projects.tfm.section1.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
        <div className='technologies'>
          <h3>{t('projects.tfm.section2.title')}</h3>
          <div className='technologies-chips-container'>
            <div className='technologies-chips'>
            {(t('projects.tfm.section2.points1', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </div>
          <div className='technologies-chips'>
            {(t('projects.tfm.section2.points2', { returnObjects: true }) as string[]).map((point: string, index: number) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </div>
          </div>
        </div>
        <div className='pipeline'>
          <div className={`project-area-title ${expanded.tfmArea3 ? 'project-title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, tfmArea3: !prev.tfmArea3 }))}>
            <p>{t('projects.tfm.section3.title')}</p>
            <div className='expand-icon'>
              {expanded.tfmArea3 ? <IconUpArrow /> : <IconDownArrow />}
            </div>
          </div>
          {expanded.tfmArea3 && (
            <div className='pipeline-chips'>
              {(t('projects.tfm.section3.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                <span key={index} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </div>
          )}
        </div>
        <div className='results'>
          <div className={`project-area-title ${expanded.tfmArea4 ? 'project-title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, tfmArea4: !prev.tfmArea4 }))}>
            <p>{t('projects.tfm.section4.title')}</p>
            <div className='expand-icon'>
              {expanded.tfmArea4 ? <IconUpArrow /> : <IconDownArrow />}
            </div>
          </div>
          {expanded.tfmArea4 && (
            <div className='results-points'>
              {(t('projects.tfm.section4.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                <span key={index} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </div>
          )}
        </div>
        <div className='results'>
          <div className={`project-area-title ${expanded.tfmArea5 ? 'project-title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, tfmArea5: !prev.tfmArea5 }))}>
            <p>{t('projects.tfm.section5.title')}</p>
            <div className='expand-icon'>
              {expanded.tfmArea5 ? <IconUpArrow /> : <IconDownArrow />}
            </div>
          </div>
          {expanded.tfmArea5 && (
            <div className='results-points'>
              {(t('projects.tfm.section5.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                <span key={index} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </div>
          )}
        </div>
        <div className='results'>
          <div className={`project-area-title ${expanded.tfmArea6 ? 'project-title-expanded' : ''}`} onClick={() => setExpanded(prev => ({ ...prev, tfmArea6: !prev.tfmArea6 }))}>
            <p>{t('projects.tfm.section6.title')}</p>
            <div className='expand-icon'>
              {expanded.tfmArea6 ? <IconUpArrow /> : <IconDownArrow />}
            </div>
          </div>
          {expanded.tfmArea6 && (
            <div className='results-points'>
              <span>{t('projects.tfm.section6.point1')}</span>
              <div className="lines"></div>
              <div className='points2'>
                <span>{t('projects.tfm.section6.point11')}</span>
                <span>{t('projects.tfm.section6.point12')}</span>
                <svg className="connections" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="50" y1="0" x2="25" y2="100" />
                  <line x1="50" y1="0" x2="75" y2="100" />
                </svg>
              </div>
              <span>{t('projects.tfm.section6.point2')}</span>
              <span>{t('projects.tfm.section6.point3')}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;