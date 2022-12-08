import { configureStore } from "@reduxjs/toolkit";
import stockSlice from "./stock/stockSlice";

export const store = configureStore({
    reducer:{
        stock : stockSlice,
    }
})