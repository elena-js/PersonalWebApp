import { useTranslation } from "react-i18next";
import { useState } from "react";
import IconSearch from "../assets/icon_search.svg?react";
import '../styles/TechnicalSkills.css';

function TechnicalSkills() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("");
  const skillsGroups = [
    t('skills.technical.group1', { returnObjects: true }) as string[],
    t('skills.technical.group2', { returnObjects: true }) as string[],
    t('skills.technical.group3', { returnObjects: true }) as string[],
    t('skills.technical.group4', { returnObjects: true }) as string[],
    t('skills.technical.group5', { returnObjects: true }) as string[]
  ];

  return (
    <div className="technical-skills-container">
      <div className="technical-skills-header">
        <h3>{t('skills.technical.title')}</h3>
        <div className="filter-container">
          <IconSearch className="filter-icon" />
          <input className="filter-input" type="text" placeholder="Filter..."
            onChange={(e) => setFilter(e.target.value.toLowerCase())} />
        </div>
      </div>
      <div className="technical-skills">
        {skillsGroups.map((group, index) => (
          <div key={index} className="skills-group">
            {group.map((skill) => {
              const match = skill.toLowerCase().includes(filter);
              return (
                <span key={skill} className={`skill-chip ${match ? "" : "hidden"}`}>{skill}</span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalSkills;