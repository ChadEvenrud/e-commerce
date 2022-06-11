import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div className="nav-links-container"></div>
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <h1>This is my Navigation Bar</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
