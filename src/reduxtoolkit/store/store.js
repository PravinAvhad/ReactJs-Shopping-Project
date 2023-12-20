import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../CartSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
};
const reducer = combineReducers({
    cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
    reducer: persistedReducer,
});
export default store;