export const Input = ({
  promptA,
  promptB,
  setPromptA,
  setPromptB,
  loading,
  canRun,
  handleOnRun,
}) => {
  return (
    <>
      <div className="prompt-section d-flex justify-content-center align-items-center p-2 gap-3 ">
        <div className="prompt-1">
          <div className="prompt-title  indie-flower-regular text-success">
            {" "}
            <i className="bi bi-card-text"></i> Prompt A
          </div>
          <div className="form-wrap">
            <textarea
              className="prompt-input-area"
              name="prompt-1"
              id="promptarea-1"
              placeholder=" "
              value={promptA}
              onChange={(e) => setPromptA(e.target.value)}
            ></textarea>
            <label htmlFor="promptarea-1">// Paste your prompt A here</label>
          </div>
        </div>
        <div className="vs indie-flower-regular ">VS</div>
        <div className="prompt-2">
          <div className="prompt-title indie-flower-regular text-warning">
            <i className="bi bi-card-text"></i> Prompt B
          </div>
          <div className="form-wrap">
            <textarea
              className="prompt-input-area"
              name="prompt-2"
              id="promptarea-2"
              placeholder=" "
              value={promptB}
              onChange={(e) => setPromptB(e.target.value)}
            ></textarea>
            <label htmlFor="promptarea-2">// Paste your prompt B here</label>
          </div>
        </div>
      </div>

      <div className="runbar d-flex align-items-center justify-content-evenly  m-2 ">
        <div className="left d-flex gap-2 align-items-center">
          <button
            type="button"
            className="run-btn indie-flower-regular"
            disabled={!canRun || loading}
            onClick={handleOnRun}
          >
            {" "}
            {loading ? (
              <>
                Analyzing
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              </>
            ) : (
              "Run Comparision"
            )}
          </button>
          <div className="btn-status mt-2 ">
            //- Enter ptompt to enable button
          </div>
        </div>
        <div className="btn-status ">claude-sonnet-4-5</div>
      </div>
    </>
  );
};
