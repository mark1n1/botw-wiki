import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <center>
        <NavLink
          to="/creatures"
          // exact
          style={linkStyles}
          activestyle={{
            background: "darkblue",
          }}
        >
          Creatures
        </NavLink>
        <NavLink
          to="/equipment"
          // exact
          style={linkStyles}
          activestyle={{
            background: "darkblue",
          }}
        >
          Equipment
        </NavLink>
        <NavLink
          to="/monsters"
          // exact
          style={linkStyles}
          activestyle={{
            background: "darkblue",
          }}
        >
          Monsters
        </NavLink>
      </center>
    </div>
  );
}

export default NavBar;