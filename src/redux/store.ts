import { configureStore } from "@reduxjs/toolkit";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";
import commonReducer from './slices/commonSlice';

export const store = configureStore({
    reducer: {
        common: commonReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector