import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function ReactNavbar() {
  return (
    <>
      <header className="header">
        <h3>React CRUD</h3>
        <nav>
          <ul className="nav-links">
            <li className="nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default ReactNavbar;
