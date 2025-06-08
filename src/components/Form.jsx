import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signup, login, logout } from "../features/accounts/accountsSlice";

function Form() {
  const dispatch = useDispatch();
  const [hasAccount, setHasAccount] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="form__container">
      <h2 class="form__header">{hasAccount ? "Login" : "Sign up"}</h2>
      <form
        class="form__content"
        onSubmit={(e) => {
          e.preventDefault();
          hasAccount
            ? dispatch(login(username, password))
            : dispatch(signup(username, password));
        }}
      >
        <div class="form__group">
          <label for="username" class="form__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            class="form__input"
            placeholder={
              hasAccount ? "Enter your username" : "Enter a username"
            }
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="form__group">
          <label for="password" class="form__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            class="form__input"
            placeholder={
              hasAccount ? "Enter your password" : "Enter a password"
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="form__btn">
          {hasAccount ? "Login" : "Sign up"}
        </button>
      </form>
      <p
        className="form__situation"
        onClick={() => setHasAccount((situation) => !situation)}
      >
        {hasAccount
          ? "You don't have an account? Sign up."
          : "You have an account? Login."}
      </p>
    </div>
  );
}

export default Form;
