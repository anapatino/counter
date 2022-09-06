import "./App.css";
import Counter from "./components/counter/counter.jsx";
import Buttons from "./components/button/button.jsx";
import { useState } from "react";

function App() {
  const [numberClick, setNumber] = useState(0);

  const Increase = () => {
    setNumber(numberClick + 1);
  };

  const Reset = () => {
    setNumber(0);
  };

  return (
    <div className="App">
      <div className="principalContainer">
        <h1>Counter</h1>
        <div className="numberContainer">
          <Counter clicks={numberClick} />
        </div>
        <div className="counterContainer">
          <Buttons isClickButton={true} clickOperate={Increase} text="Click" />
          <Buttons isClickButton={false} clickOperate={Reset} text="Reset" />
        </div>
      </div>
    </div>
  );
}

export default App;
