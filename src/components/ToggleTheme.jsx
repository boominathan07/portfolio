import React, { useEffect, useState } from "react";
import { RiMoonLine, RiSunLine } from "@remixicon/react";
function ToggleTheme() {
  const [isDark, setDark] = useState(false);
  //save in locale Storage
  useEffect(() => {
    const SavedTheme = localStorage.getItem("theme") ||
      "dark";
    setDark(SavedTheme === "dark");
    document.documentElement.classList.toggle("dark", SavedTheme === "dark");
  }, []);

  const handleDark = () => {
    const newTheme = !isDark;
    setDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };
  return (
    <button
      onClick={handleDark}
      className="size-7 flex items-center justify-center hover:bg-zinc-200 darK:hover:bg-zinc-800 transition-colors rounded-full p-1"
    >
      {isDark ? <RiSunLine /> : <RiMoonLine />}
    </button>
  );
}

export default ToggleTheme;
