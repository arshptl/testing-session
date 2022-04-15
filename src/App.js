import "./App.css";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";


export const removeCamelWithSpace = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonState, setButtonState] = useState("MediumVioletRed");
  const [checkboxState, setCheckboxState] = useState(false);

  const newButtonColor = buttonState === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  // const newButton
  
  return (
    <Container>
      <Button
        style={{ backgroundColor: checkboxState ? "gray" : buttonState }}
        onClick={() => setButtonState(newButtonColor)}
        disabled={checkboxState}
      >
        change to {removeCamelWithSpace(newButtonColor)}
      </Button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={(e) => setCheckboxState(e.target.checked)}
        defaultChecked={checkboxState}
        aria-checked={checkboxState}
      />
      <label htmlFor="disable-button-checkbox">disable button</label>
    </Container>
  );
}

export default App;
