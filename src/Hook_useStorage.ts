import { useState } from "react";

export const useStorage = (valueInput = "") => {
  const [value, setInputValue] = useState(valueInput);


  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const resetInputValue = () => {
    setInputValue("");
  };

  return {
    value,
    inputValue,
    resetInputValue,
  };
};
