import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
      <div>
        <div id="content">
          <Outlet />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Introduce</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default Layout;
