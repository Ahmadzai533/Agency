import React, { useState } from "react";
import assets from "../assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div
      className="flex justify-between items-center px-4
      sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
      backdrop-blur-xl font-medium
      bg-white/70 dark:bg-black/70
      text-black dark:text-white
      transition-colors"
    >
      {/* Logo */}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt="Logo"
      />

      {/* Navigation links */}
      <div
        className={`sm:flex sm:items-center gap-5
        ${
          !sideBarOpen
            ? "max-sm:w-0 max-sm:overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        }
        max-sm:fixed top-0 bottom-0 right-0
        max-sm:min-h-screen max-sm:flex-col
        max-sm:bg-white dark:max-sm:bg-black
        max-sm:text-black dark:max-sm:text-white
        max-sm:pt-20 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSideBarOpen(false)}
        />

        <a onClick={() => setSideBarOpen(false)} href="#home">
          Home
        </a>
        <a onClick={() => setSideBarOpen(false)} href="#services">
          Services
        </a>
        <a onClick={() => setSideBarOpen(false)} href="#ourWork">
          Our Work
        </a>
        <a onClick={() => setSideBarOpen(false)} href="#contact-us">
          Contact Us
        </a>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-3">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          onClick={() => setSideBarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        <a
          href="#contact-us"
          className="max-sm:hidden flex items-center gap-2
          bg-blue-700 text-white px-6 py-2 rounded-full
          hover:scale-105 transition-all"
        >
          Connect
          <img src={assets.arrow_icon} alt="" width={14} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
