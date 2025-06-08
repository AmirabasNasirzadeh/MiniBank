import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./features/accounts/accountsSlice";

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
});

export default store;
