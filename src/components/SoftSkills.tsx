import { useTranslation } from 'react-i18next';
import '../styles/SoftSkills.css';

function SoftSkills() {
    const { t } = useTranslation();
    const skills = t('skills.soft.skills', { returnObjects: true }) as string[];
    const col1 = skills.slice(0, 4);
    const col2 = skills.slice(4, 8);

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