import { useState } from "react";

function useCounter(initialValue = 0, val) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(prevState => prevState + val);
  };

  const handleDecrement = () => {
    setCount(prevState => prevState - val);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return [count, handleIncrement, handleReset, handleDecrement];
}

export default useCounter;
