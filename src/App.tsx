import Header from "./Header/Header";
import { useState, useEffect } from "react";
import ToDo from "./ToDo/ToDo";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <ToDo darkMode={darkMode} />
    </>
  );
}

export default App;
