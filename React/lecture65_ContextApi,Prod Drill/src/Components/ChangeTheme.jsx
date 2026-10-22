
import React, { use } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ChangeTheme() {
  const { setTheme } = use(ThemeContext);

  return (
    <div>
      <h3>ChangeTheme</h3>
      <select name="" id="" onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
}

export default ChangeTheme;