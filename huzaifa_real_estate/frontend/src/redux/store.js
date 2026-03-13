import { combineReducers, configureStore } from "@reduxjs/toolkit"; // 1. combineReducers add kiya
import userReducer from "./User/userSlice";
import { persistReducer, persistStore } from "redux-persist"; // 2. persistReducer (ed hata diya)
import storage from "redux-persist/lib/storage"; // 3. Curly braces {} hata diye

// Saare reducers ko combine karein
const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

// persistReducer function se persistedReducer variable banayein
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
