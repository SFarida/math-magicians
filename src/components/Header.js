import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar fixed-top">
      <div className="container-fluid my-3">
        <NavLink className="navbar-brand" to="/">Math Magicians</NavLink>
        <ul className="menu d-flex flex-wrap">
          <li className="list-group-item px-2">
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active nav_link' : 'nav_link')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="list-group-item">|</li>
          <li className="list-group-item px-2">
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active nav_link' : 'nav_link')}
              to="/calculator"
            >
              Calculator
            </NavLink>
          </li>
          <li className="list-group-item">|</li>
          <li className="list-group-item px-2">
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active nav_link' : 'nav_link')}
              to="/quote"
            >
              Quote
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
