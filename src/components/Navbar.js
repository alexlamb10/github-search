/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ setName, setSearch }) {
  const [isActive, setIsActive] = useState(false);

  function toggleClass() {
    setIsActive(!isActive);
  }
  function navClicked() {
    setIsActive(false);
    setName("");
    setSearch(false);
  }

  return (
    <div>
      <div className="header">
        <nav className="navbar">
          <a href="#" className="nav-branding" onClick={navClicked}>
            Search GitHub
          </a>

          <ul className={!isActive ? "nav-menu" : "nav-menu active"}>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={navClicked}>
                Home
              </a>
            </li>
          </ul>

          <div
            className={!isActive ? "hamburger" : "hamburger active"}
            onClick={toggleClass}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
