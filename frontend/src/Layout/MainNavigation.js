import { Link } from 'react-router-dom';

const MainNavigation = () => (
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img
          src={window.location.origin + '/images/logo.png'}
          alt=""
          width="64"
          height="32"
        />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/employees">
              Employees
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default MainNavigation;
