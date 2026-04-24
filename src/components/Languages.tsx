import ProgressBar from './ProgressBar';
import '../styles/Languages.css';
import { useTranslation } from 'react-i18next';

function Languages() {
  const { t } = useTranslation();
  
  const languages = [
    { label: t('languages.ES.label'), level: "C2", percent: 100, info: t('languages.ES.info') },
    { label: t('languages.EN.label'), level: "C1", percent: 80, info: t('languages.EN.info') },
    { label: t('languages.FR.label'), level: "B2", percent: 60, info: t('languages.FR.info') },
  ];
  return (
    <>
      <h3 className='languages-title'>{t('languages.title')}</h3>
      <div className="languages">
      {languages.map((lang) => (
          <ProgressBar
          key={lang.label}
          label={lang.label}
          level={lang.level}
          percent={lang.percent}
          info={lang.info}
          />
      ))}
      </div>
    </>
  );
}

export default Languages;