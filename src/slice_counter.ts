import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
}

const initialState: CounterState = { count: 0 };

export const sliceCounter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementState: (state: CounterState) => {
            ++state.count;
        },
        decrementState: (state: CounterState) => {
            --state.count;
        },
        resetCounter: (state: CounterState, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
    },
});

export const { incrementState, decrementState, resetCounter } =
    sliceCounter.actions;
