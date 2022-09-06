import "./counter.css";

function Counter({clicks}) {
  return (
      <div className="numberContainer">
        {clicks}
      </div>
  );
}
export default Counter;



