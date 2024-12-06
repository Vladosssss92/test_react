import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootInput, RootState } from "./model";
import { useStorage } from "./Hook_useStorage";
import { decrementState, incrementState, resetCounter } from "./slice_counter";

export const Component4: FC = () => {
  const { value, inputValue, resetInputValue } = useStorage();
  const count = useSelector((state: RootState) => state.counter.count);
  const valueStorage = useSelector((state: RootInput) => state.input.value);
  const dispatch = useDispatch();

  const setCount = () => {
    if (!Number.isNaN(+value)) {
      dispatch(resetCounter(+value))
      resetInputValue()
    }
    resetInputValue()
  }
  return (
    <>
      <div className="wrapper">
        <p>Четвертый компонент</p>
        <input
          className="input"
          onChange={(e) => inputValue(e)}
          value={value}
        ></input>
        <hr />
        <button className="button" onClick={() => dispatch(incrementState())}> Счетчик + 1</button>
        <button className="button" onClick={() => dispatch(decrementState())}> Счетчик - 1</button>
        <button className="button" onClick={setCount}> Установить число из инпута</button>
        <button className="button" onClick={() => dispatch(resetCounter(0))}> Сбросить</button>
        <p>{'Счетчик: ' + count}</p>
        <p>{valueStorage ? 'Хранилище инпута: ' + valueStorage : 'В ИНПУТЕ пусто'}</p>
      </div>
    </>
  );
};
