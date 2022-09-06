import "./button.css";
import { Button } from "@nextui-org/react";

function Buttons ({isClickButton, clickOperate, text }) {
  return(
    <div className="counterContainer">
        <Button className={isClickButton ? 'buttonClick' : 'buttonReset'} onPress={clickOperate}>{text}</Button>
    </div>
  );
}

export default Buttons;