import React from "react";
import useCounter from "./custom_hooks/useCounter";

function CounterOne() {
  const [count, handleIncrement, handleReset, handleDecrement] = useCounter(
    0,
    1
  );

  return (
    <div className="counter">
      <h3>Counter One: {count}</h3>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default CounterOne;
