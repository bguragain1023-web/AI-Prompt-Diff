export const History = ({ history }) => {
  if (!history || history.length === 0) return null;
  return (
    <>
      <div className="">
        <span className="history-title text-info">Prompt History</span>
        <div className="history-box container">
          {history.map((item, i) => (
            <li key={i} className="list-unstyled list-edit">
              {" "}
              - {item}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
