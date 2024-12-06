import { useStorage } from "./Hook_useStorage";
import { Component4 } from "./Component4";
import { useDispatch, useSelector } from "react-redux";
import { RootInput, RootState } from "./model";
import { inputToStorage } from "./slice_input";
import { FC } from "react";


export const Component3: FC = () => {
  const { value, inputValue, resetInputValue } = useStorage();
  const count = useSelector((state: RootState) => state.counter.count);
  const valueStorage = useSelector((state: RootInput) => state.input.value);
  const dispatch = useDispatch()

  const handleSaveClick = () => {
    dispatch(inputToStorage(value));
    resetInputValue();
  }
  return (
    <>
      <div className="wrapper">
        <p>Третий компонент</p>
        <input
          className="input"
          onChange={(e) => inputValue(e)}
          value={value}
        ></input>
        <button className="button" onClick={handleSaveClick}>
          Сохранить в стор значение инпута
        </button>
        <p>{'Счетчик: ' + count}</p>
        <p>{valueStorage ? 'Хранилище инпута: ' + valueStorage : 'В ИНПУТЕ пусто'}</p>
        <Component4 />
      </div>
    </>
  );
};
