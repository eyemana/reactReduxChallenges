import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#39a3e3" };

  return (
    <nav>
      <NavLink to="/" activeStype={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStype={activeStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStype={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
