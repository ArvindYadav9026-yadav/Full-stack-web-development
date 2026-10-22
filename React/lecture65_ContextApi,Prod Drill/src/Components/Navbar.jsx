import React, { use, useContext } from "react";
import { UserContext } from "../main";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
//   const value = useContext(UserContext);
//   console.log(value);

const {theme} = use(ThemeContext)

  return (
    <div style={{ backgroundColor: "rebeccapurple", padding: "20px" }}>
      <h1>Navbar </h1>
      <p>Theme : {theme} </p>
    </div>
  );
}

export default Navbar;