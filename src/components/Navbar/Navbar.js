import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import nav from "./Navbar.module.css";

function Navigation() {
  return (
    <nav className={nav.nav}>
      <div className={nav.item}>
        <NavLink activeclassname={nav.active} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={nav.item} activeclassname={nav.active}>
        <NavLink activeclassname={nav.active} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={nav.item} activeclassname={nav.active}>
        <NavLink to="/news"></NavLink>
      </div>
      <div className={nav.item} activeclassname={nav.active}>
        <NavLink to="">News</NavLink>
      </div>
      <div className={nav.item} activeclassname={nav.active}>
        <NavLink to="/music">Music</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
