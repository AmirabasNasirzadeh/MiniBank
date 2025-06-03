function Form() {
  return (
    <div class="form__container">
      <h2 class="form__header">Login</h2>
      <form class="form__content">
        <div class="form__group">
          <label for="username" class="form__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            class="form__input"
            placeholder="Enter your username"
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
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" class="form__btn">
          Login
        </button>
      </form>
      <p className="form__situation">You have an account? Sign in.</p>
    </div>
  );
}

export default Form;
