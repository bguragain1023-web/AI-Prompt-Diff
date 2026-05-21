

export const Compare = ({results, loading}) => {
  return (
    <div className="compare-section d-flex g-2 justify-content-center align-items-center">
      <div className="response-container">
        <div className="response-title text-success indie-flower-regular"> <i className="bi bi-card-text"></i> Response A</div>
        <div className="response-box d-flex justify-content-center align-items-center ">
           <span className="emptyresponse">{ results? results.a.text : "awaiting result"}</span>
        </div>
      </div>
      <div className="response-container">
          <div className="response-title text-warning indie-flower-regular "> <i className="bi bi-card-text"></i> Response B</div>
        <div className="response-box d-flex justify-content-center align-items-center">
          <span className="emptyresponse">{ results? results.b.text : "awaiting result"}</span>
        </div>
      </div>
    </div>
  )
}
