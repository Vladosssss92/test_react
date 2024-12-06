import { Component3 } from "./Component3";
import { useSelector } from "react-redux";
import { RootInput, RootState } from "./model";
import { FC } from "react";

export const Component2: FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const valueInput = useSelector((state: RootInput) => state.input.value);
  
  return (
    <>
      <div className="wrapper">
        <p>Второй компонент</p>
        <p>{'Счетчик: ' + count}</p>
        <p>{valueInput ? 'Хранилище инпута: ' + valueInput : 'В ИНПУТЕ пусто'}</p>
        <Component3 />
      </div>
    </>
  );
};
