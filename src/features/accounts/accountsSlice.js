import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [
    { username: "Amir", password: "123", balance: 50, loan: 10 },
    { username: "Ali", password: "456", balance: 100, loan: 25 },
  ],
  currentUser: null,
  isLoggedin: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login(state, action) {
      const user = state.accounts.find(
        (acc) => acc.username === action.payload.username
      );
      // Deny login if user doesn't exist or password is wrong
      if (!user || user.password !== action.payload.password) return;
      state.currentUser = user; // Store the full user object
      state.isLoggedin = true;
    },
    signup(state, action) {
      if (
        state.accounts.some((acc) => acc.username === action.payload.username)
      )
        return;

      state.currentUser = {
        username: action.payload.username,
        password: action.payload.password,
        balance: 0,
        loan: 0,
      };
      state.accounts.push(state.currentUser);
      state.isLoggedin = true;
    },
    logout(state) {
      state.currentUser = null;
      state.isLoggedin = false;
    },
  },
});

export const { login, signup, logout } = accountSlice.actions;
export default accountSlice.reducer;
