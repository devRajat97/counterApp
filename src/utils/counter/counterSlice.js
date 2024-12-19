import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
    value: 1,
  }

const counterSlice = createSlice({
  name: "counter",
  initialState : initialStateValues,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
        state.value -= 1;
      },
      amount : (state,actions) =>{
        state.value = actions.payload
      },
      reset : (state)=>{
        state.value = 0
      }
  },
  
});

export const {increment,decrement,amount, reset} = counterSlice.actions
export default counterSlice.reducer