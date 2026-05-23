export const Metrics = ({ valueA, valueB, isSpeed }) => {
  const barWidthA = isSpeed ? Math.min(100, (valueA / 5000) * 100) : valueA;
  const barWidthB = isSpeed ? Math.min(100, (valueA / 5000) * 100) : valueB;
  return (
    <div className="metric-bars">
      <div className="bar-row">
        <span className="bar-tag text-success"> Response A</span>
        <div className="bar-track">
          <div
            className="bar-fill bg-success"
            style={{ width: `${barWidthA}%` }}
          />
        </div>
        <span className="bar-val">{isSpeed ? `${valueA}ms` : valueA}</span>
      </div>
      <div className="bar-row">
        <span className="bar-tag text-warning"> Response B</span>
        <div className="bar-track">
          <div
            className="bar-fill bg-warning"
            style={{ width: `${barWidthB}%` }}
          />
        </div>
        <span className="bar-val">{isSpeed ? `${valueB}ms` : valueB}</span>
      </div>
    </div>
  );
};
