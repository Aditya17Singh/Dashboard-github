import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles">
            <span>Article</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/help">
            {" "}
            <span>Help and Support</span>{" "}
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
