import Display from "./components/Display.jsx";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [CalVal, setCalVal] = useState([""]);

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal([""]);
    } else if (buttonText === "=") {
      setCalVal(eval(CalVal));
    } else {
      const newDisplayValue = CalVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <center>
        <h1>Calculator React App</h1>
      </center>
      <div className={styles.calculator}>
        <Display CalVal={CalVal}></Display>
        <div className={styles.buttonsContainer}>
          <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
        </div>
      </div>
    </>
  );
}

export default App;
