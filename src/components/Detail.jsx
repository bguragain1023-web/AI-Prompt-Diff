import { Metrics } from "./Metrics";

export const Detail = ({ metrics, differences }) => {
  return (
    <>
      <div className="detail-container d-flex justify-content-center align-items-center">
        <div className="length detail-box">
          <div className="detail-title indie-flower-regular text-info">
            Length
          </div>
          <div className="result-box">
            <Metrics
              valueA={metrics?.a.length ?? 0}
              valueB={metrics?.b.length ?? 0}
            />
          </div>
        </div>
        <div className="clarity detail-box ">
          <div className="detail-title indie-flower-regular text-success ">
            Clarity
          </div>
          <div className="result-box">
            <Metrics
              valueA={metrics?.a.clarity ?? 0}
              valueB={metrics?.b.clarity ?? 0}
            />
          </div>
        </div>
        <div className="focus detail-box ">
          <div className="detail-title indie-flower-regular text-danger">
            Speed
          </div>
          <div className="result-box">
            <Metrics
              valueA={metrics?.a.speed ?? 0}
              valueB={metrics?.b.speed ?? 0}
              isSpeed={true}
            />
          </div>
        </div>
      </div>

      <div className="key-differences container">
        <div className="key-title text-info indie-flower-regular">
          Key Differences:
          <div className="diffcontent">{differences}</div>
        </div>
      </div>
    </>
  );
};
