export const Input = () => {
  return (
    <>
      <div className="prompt-section d-flex justify-content-center align-items-center p-2 gap-3 ">
        <div className="prompt-1">
            <div className="prompt-title  indie-flower-regular text-success"> <i className="bi bi-card-text"></i> Prompt A</div>
          <div className="form-wrap">
            <textarea
              className="prompt-input-area"
              name="prompt-1"
              id="promptarea-1"
              placeholder=" "
            ></textarea>
            <label htmlFor="promptarea-1">// Paste your prompt A here</label>
          </div>
        </div>
        <div className="vs indie-flower-regular ">VS</div>
        <div className="prompt-2">
            <div className="prompt-title indie-flower-regular text-warning"><i className="bi bi-card-text"></i> Prompt B</div>
          <div className="form-wrap">
            <textarea
              className="prompt-input-area"
              name="prompt-2"
              id="promptarea-2"
              placeholder=" "
            ></textarea>
            <label htmlFor="promptarea-2">// Paste your prompt B here</label>
          </div>
        </div>
      </div>
      
      <div className="runbar d-flex align-items-center justify-content-center  m-2 gap-3 ">
        <div className="btn-status">Response using claude API</div>
        <button type="button" className="run-btn indie-flower-regular" disabled>Run Comparision</button>
        <div className="btn-status mt-2 ">Enter ptompt to enable button</div>
      </div>
    </>
  );
};
