import { createSlice } from "@reduxjs/toolkit";

// Helper functions for localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("bankAppData");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Failed to load state from localStorage", e);
    return undefined;
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("bankAppData", serializedState);
  } catch (e) {
    console.warn("Failed to save state to localStorage", e);
  }
};

const initialState = loadFromLocalStorage() || {
  accounts: [
    { username: "amir", password: "123", balance: 50, loan: 10 },
    { username: "ali", password: "456", balance: 100, loan: 25 },
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

      if (!user || user.password !== action.payload.password) {
        alert("Invalid username or password!");
        return;
      }
      state.currentUser = { ...user };
      state.isLoggedin = true;
      saveToLocalStorage(state);
    },
    signup(state, action) {
      if (
        state.accounts.some((acc) => acc.username === action.payload.username)
      ) {
        alert("An account exist with the same username!");
        return;
      }

      const newUser = {
        username: action.payload.username,
        password: action.payload.password,
        balance: 0,
        loan: 0,
      };
      state.accounts.push(newUser);
      state.currentUser = { ...newUser };
      state.isLoggedin = true;
      saveToLocalStorage(state);
    },
    logout(state) {
      state.isLoggedin = false;
      state.currentUser = null;
      saveToLocalStorage(state);
      alert("You logged out from your account!");
    },
    deleteAccount(state) {
      state.isLoggedin = false;
      state.accounts = state.accounts.filter(
        (user) => user.username !== state.currentUser.username
      );
      state.currentUser = null;
      saveToLocalStorage(state);
      alert("You deleted your account!");
    },
    transfer(state, action) {
      if (action.payload.username === state.currentUser.username) {
        alert("You can't transfer money to your own account!");
        return;
      }
      if (state.currentUser.balance < action.payload.amount) {
        alert("You don't have enough money!");
        return;
      }

      state.accounts = state.accounts.map((user) => {
        if (user.username === action.payload.username) {
          return { ...user, balance: +user.balance + +action.payload.amount };
        }
        if (user.username === state.currentUser.username) {
          return { ...user, balance: +user.balance - +action.payload.amount };
        }
        return user;
      });

      state.currentUser = {
        ...state.accounts.find(
          (u) => u.username === state.currentUser.username
        ),
      };
      saveToLocalStorage(state);
    },
    requestLoan(state, action) {
      state.accounts = state.accounts.map((user) =>
        user.username === state.currentUser.username
          ? {
              ...user,
              balance: +user.balance + +action.payload,
              loan: +user.loan + +action.payload,
            }
          : user
      );

      state.currentUser = {
        ...state.accounts.find(
          (u) => u.username === state.currentUser.username
        ),
      };
      saveToLocalStorage(state);
    },
    payLoan(state) {
      if (state.currentUser.balance < state.currentUser.loan) {
        alert("You don't have enough money to pay your loan!");
        return;
      }

      state.accounts = state.accounts.map((user) =>
        user.username === state.currentUser.username
          ? { ...user, balance: +user.balance - +user.loan, loan: 0 }
          : user
      );
      state.currentUser = {
        ...state.accounts.find(
          (u) => u.username === state.currentUser.username
        ),
      };
      saveToLocalStorage(state);
    },
  },
});

export const {
  login,
  signup,
  logout,
  deleteAccount,
  transfer,
  requestLoan,
  payLoan,
} = accountSlice.actions;
export default accountSlice.reducer;
