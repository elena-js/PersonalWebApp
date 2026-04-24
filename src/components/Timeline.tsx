import { useTranslation } from 'react-i18next';
import "../styles/Timeline.css";
import upm_logo from '../assets/upm_logo.png';
import satec_logo from '../assets/satec_logo.png';
import wut_logo from '../assets/wut_logo.png';
import gmv_logo from '../assets/gmv_logo.png';

interface TimelineEvent {
    logo: string;
    label: string;
}

function Timeline() {
    const { t } = useTranslation();
    const events: TimelineEvent[] = [
        { logo: upm_logo, label: 'bachelor' },
        { logo: satec_logo, label: 'internship' },
        { logo: upm_logo, label: 'master' },
        { logo: wut_logo, label: 'mobility' },
        { logo: gmv_logo, label: 'work' },
    ];
    const years = [
        { year: 2018, units: 0 },
        { year: 2020, units: 1 },
        { year: 2022, units: 2 },
        { year: 2023, units: 3 },
        { year: 2024, units: 4 },
        { year: 2025, units: 5 },
        { year: 2026, units: 6 },
    ];
    // Timeline divided into 7 parts: 2018, 2020, 2022, 2023, 2024, 2025, 2026
    const unitToPercent = (units: number) => (units / 7) * 100;

    return (
        <div className="timeline-container">
            <div className="timeline-track">
                {events.map((event) => {
                    const data = t(`timeline.${event.label}`, { returnObjects: true }) as any;
                    const left = unitToPercent(data.start);
                    const width = unitToPercent(data.end - data.start);
                    const isTop = data.layer === 0;

                    return (
                        <div
                            key={event.label}
                            className={`timeline-bar ${isTop ? 'timeline-bar-top' : 'timeline-bar-bottom'}`}
                            style={{ left: `${left}%`, width: `${width}%` }}
                        >
                            <div className="bar-content">
                                <div className="timeline-icon">
                                    <img src={event.logo} alt={event.label} />
                                    <span className="date-range">{data.date}</span>
                                </div>
                            </div>
                            <span className="tooltip">{data.text}</span>
                        </div>
                    );
                })}

                {years.map((year) => (
                    <div key={year.year} className="timeline-year-marker" style={{ left: `${unitToPercent(year.units)}%` }}>
                        <span className="year-label">{year.year}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;