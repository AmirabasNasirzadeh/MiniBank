import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main class="main__content">
        <h1 class="main__heading">🪙 MiniBank, Bank in your back pocket!</h1>
        <p class="main__subheader">
          MiniBank is a React banking demo that simulates financial operations.
          Users can create accounts, transfer money, take loans, and pay loans
          back. all with localStorage data persistence. Built with Vite and
          Redux Toolkit.
        </p>
        <Link to="/account" class="main__btn">
          Let's get started
        </Link>
      </main>
    </>
  );
}

export default Home;
