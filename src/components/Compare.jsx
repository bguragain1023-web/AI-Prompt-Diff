import ReactMarkdown from "react-markdown";
export const Compare = ({ results }) => {
  return (
    <div className="compare-section d-flex g-2 justify-content-center align-items-center">
      <div className="response-container">
        <div className="response-title   d-flex justify-content-between">
          <span className="text-success indie-flower-regular">
            <i className="bi bi-card-text"></i> Response A
          </span>
          <span className="token">{results?.a.token}-token</span>
        </div>
        <div
          className={`response-box   ${results ? "" : " d-flex justify-content-center align-items-center"} `}
        >
          {results ? (
            <ReactMarkdown>{results.a.text}</ReactMarkdown>
          ) : (
            <span className="emptyresponse">awaiting result </span>
          )}
        </div>
      </div>
      <div className="response-container">
        <div className="response-title   d-flex justify-content-between">
          <span className="text-warning indie-flower-regular">
            <i className="bi bi-card-text  "></i> Response B
          </span>
          <span className="token">{results?.b.token}-token</span>
        </div>
        <div
          className={`response-box  ${results ? "" : " d-flex justify-content-center align-items-center"} `}
        >
          {results ? (
            <ReactMarkdown>{results.b.text}</ReactMarkdown>
          ) : (
            <span className="emptyresponse">awaiting result </span>
          )}
        </div>
      </div>
    </div>
  );
};
