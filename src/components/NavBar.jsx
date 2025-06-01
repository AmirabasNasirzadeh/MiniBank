import NavItem from "./NavItem";

function NavBar() {
  return (
    <nav class="nav">
      <ul class="nav__list">
        <NavItem toPage="/" textContent="Home" />
        <NavItem toPage="/aboutus" textContent="About us" />
        <NavItem toPage="/whyminibank" textContent="Why MiniBank" />
        <NavItem toPage="/account" textContent="Your Account" />
      </ul>
    </nav>
  );
}

export default NavBar;
