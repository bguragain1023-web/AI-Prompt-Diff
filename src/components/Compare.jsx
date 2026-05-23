export const Compare = ({ results }) => {
  return (
    <div className="compare-section d-flex g-2 justify-content-center align-items-center">
      <div className="response-container">
        <div className="response-title   d-flex justify-content-between">
          <span className="text-success">
            <i className="bi bi-card-text"></i> Response A
          </span>
          <span className="token">{results?.a.token}-token</span>
        </div>
        <div
          className={`response-box d-flex  ${results ? "justify-content-start align-items-start" : "justify-content-center align-items-center"} `}
        >
          <span className="emptyresponse">
            {results ? results.a.text : "awaiting result"}
          </span>
        </div>
      </div>
      <div className="response-container">
        <div className="response-title  indie-flower-regular d-flex justify-content-between">
          <span className="text-warning">
            <i className="bi bi-card-text"></i> Response B
          </span>
          <span className="token">{results?.b.token}-token</span>
        </div>
        <div
          className={`response-box d-flex  ${results ? "justify-content-start align-items-start" : "justify-content-center align-items-center"} `}
        >
          <span className="emptyresponse">
            {results ? results.b.text : "awaiting result"}
          </span>
        </div>
      </div>
    </div>
  );
};
