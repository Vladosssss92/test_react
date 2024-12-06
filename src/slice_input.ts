import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
    value: string;
}

const initialState: InputState = { value: "" };

export const sliceSetValue = createSlice({
    name: "setValue",
    initialState,
    reducers: {
        inputToStorage: (state: InputState, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { inputToStorage } = sliceSetValue.actions;