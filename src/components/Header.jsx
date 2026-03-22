import React, { useState } from "react";
import { navItems, socialLink } from "../constant/data";
import ToggleTheme from "./ToggleTheme";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const [activeLink, setActiveLink] = useState();
  const handleActive = (id) => {
    setIsOpen(false);
    setActiveLink(id);
  };
  return (
    <header className="fixed top-0 left-0 w-full pt-3 z-40">
      {/* socialLinks */}
      <div className="container">
        <div
          className="flex items-center justify-between bg-zinc-100/80 rounded-full px-4 py-3 border-zinc-200 dark:bg-zinc-900
         dark:border-zinc-800 backdrop-blur-lg"
        >
          <div className="flex items-center gap-3.5">
            {socialLink.map((item) => (
              <a href={item.href} target="_blank" className="hover:text-emerald-600">
                <item.icon />
              </a>
            ))}
          </div>

          {/* Mobile menu */}
          <ul
            className={`lg:hidden absolute top-full right-6
  bg-zinc-200 min-w-36 p-5 rounded-lg mt-3 space-y-3
  scale-y-0 transition-transform origin-top-right  dark:text-white dark:bg-zinc-800
  ${isOpen ? "scale-y-100" : ""}`}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="hover:text-emerald-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Desktop menu */}
          <ul className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`inline-block text-zinc-800 dark:hover:text-emerald-800 dark:text-zinc-400 hover:text-emerald-800 transition-colors font-medium
                  ${activeLink === item.id ? "text-emerald-600" : ""}`}
                  onClick={() => handleActive(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Togglebtn */}
          <div className="flex items-center gap-2.5">
            <ToggleTheme />
            <button className="lg:hidden" onClick={handleClick}>
              {isOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
