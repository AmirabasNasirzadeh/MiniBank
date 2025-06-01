import { NavLink } from "react-router-dom";

function NavItem({ toPage, textContent }) {
  return (
    <li>
      <NavLink to={toPage} className="nav__btn">
        {textContent}
      </NavLink>
    </li>
  );
}

export default NavItem;
