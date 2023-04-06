/**
 * a basic layout for the app. It includes a navigation bar with two links,
 * one to the home page and another to the help page.
 */
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
