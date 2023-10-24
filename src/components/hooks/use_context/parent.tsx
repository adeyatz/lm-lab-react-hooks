import { useState, createContext } from "react";
import { Child1 } from "./child_1";
import { Child2 } from "./child_2";

const themeDark = {
  backgroundColor: "#333",
  color: "white",
  padding: "2rem",
  margin: "2rem",
};

const themeLight = {
  backgroundColor: "#CCC",
  color: "#333",
  padding: "2rem",
  margin: "2rem",
};

export const ThemeContext = createContext(themeDark);

export const Parent = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    //        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    setDarkTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme ? themeDark : themeLight}>
      <div className="section">
        <h2>useContext</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Child1 />
        <Child2 />
      </div>
    </ThemeContext.Provider>
  );
};
