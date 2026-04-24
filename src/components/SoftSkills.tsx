import { useTranslation } from 'react-i18next';
import '../styles/SoftSkills.css';

function SoftSkills() {
    const { t } = useTranslation();
    const skills = t('skills.soft.skills', { returnObjects: true }) as string[];

    return (
        <div className="soft-skills">
            <h3>{t('skills.soft.title')}</h3>
            <div className="skills-columns">
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                 </ul>
            </div>
        </div>
    );
}

export default SoftSkills;