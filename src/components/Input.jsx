export const Input = ({
  promptA,
  setPromptA,
  loading,
  canRun,
  handleOnRun,
}) => {
  return (
    <>
      <div className="prompt-section container d-flex justify-content-center align-items-center p-2 gap-3 ">
        <div className="prompt">
          <div className="prompt-title   text-success">
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

        <div className="runbar   m-2 ">
          <div className="left d-flex gap-2 flex-column  align-items-center">
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
        </div>
      </div>
    </>
  );
};
