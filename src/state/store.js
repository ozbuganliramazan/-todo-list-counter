import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import todoSlice from "./todoSlice";


export const store = configureStore({
    reducer: {
        counterState: counterReducer,
        todoState: todoSlice,
    }
})
