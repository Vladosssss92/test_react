import { Component2 } from "./Component2";
import { useSelector } from "react-redux";
import { RootInput, RootState } from "./model";
import { FC } from "react";

export const Component1: FC = () => {
  console.log(count);
  const count = useSelector((state: RootState) => state.counter.count);
  const valueInput = useSelector((state: RootInput) => state.input.value);
  let c = 

  return (
    <>
      <div className="wrapper">
        <p>Первый компонент</p>
        <p>{"Счетчик: " + count}</p>
        <p>
          {valueInput ? "Хранилище инпута: " + valueInput : "В ИНПУТЕ пусто"}
        </p>
        <Component2 />
      </div>
    </>
  );
};
