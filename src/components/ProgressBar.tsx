function ProgressBar({ label, level, percent, info }: { label: string; level: string; percent: number; info: string }) {
  return (
    <div className="progress-item">
      <div className="progress-bar">
        <div className="progress-label">
          <span>{label}</span>
          <span>{level}</span>
        </div>
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
        <div className="progress-tooltip">
          {info}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;