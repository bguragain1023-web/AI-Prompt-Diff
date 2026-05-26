import ReactMarkdown from "react-markdown";
export const Compare = ({ results, error }) => {
  return (
    <div className="compare-section d-flex g-2 justify-content-center align-items-center">
      <div className="response-container d-flex align-items-center justify-content-center flex-column">
        <span className="aiName text-warning">Claude-Sonnet-4-5 </span>
        <div className="response-title   d-flex justify-content-between">
          <span className="text-success ">
            <i className="bi bi-card-text"></i> Response A
          </span>

          <span className="token">{results?.a.token}-token</span>
        </div>
        <div
          className={`response-box   ${results ? "" : " d-flex justify-content-center align-items-center"} `}
        >
          {error ? (
            <span className="text-danger">{error}</span>
          ) : results ? (
            <ReactMarkdown>{results.a.text}</ReactMarkdown>
          ) : (
            <span className="emptyresponse">awaiting result </span>
          )}
        </div>
      </div>
      <div className="response-container d-flex align-items-center justify-content-center flex-column">
        <span className="aiName text-warning "> GPT-5-Nano </span>
        <div className="response-title   d-flex justify-content-between">
          <span className="text-success ">
            <i className="bi bi-card-text  "></i> Response B
          </span>

          <span className="token">{results?.b.token}-token</span>
        </div>
        <div
          className={`response-box  ${results ? "" : " d-flex justify-content-center align-items-center"} `}
        >
          {error ? (
            <span className="text-danger">{error}</span>
          ) : results ? (
            <ReactMarkdown>{results.b.text}</ReactMarkdown>
          ) : (
            <span className="emptyresponse">awaiting result </span>
          )}
        </div>
      </div>
    </div>
  );
};
