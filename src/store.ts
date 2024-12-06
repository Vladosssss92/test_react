import { configureStore} from "@reduxjs/toolkit";
import { sliceCounter } from "./slice_counter";
import { sliceSetValue } from "./slice_input";



export const store = configureStore({
  reducer: {
    counter: sliceCounter.reducer,
    input: sliceSetValue.reducer,
  },
});
