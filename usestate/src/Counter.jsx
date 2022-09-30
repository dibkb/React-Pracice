import React from "react";
import { Button } from "./assets/Button";
export const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <h3>Counter</h3>
      <span>{counter}</span>
      <Button label="DECREASE" setCounter={setCounter} />
      <Button label="INCREASE" setCounter={setCounter} />
    </div>
  );
};
