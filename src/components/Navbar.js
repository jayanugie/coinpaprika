import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-32 border bg-white flex shadow-md">
      <div className="flex items-end container mx-auto lg:px-20 px-5">
        <div className="space-x-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-sky-700 font-bold border-b-4 border-sky-700"
                : "text-neutral-500"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-sky-700 font-bold border-b-4 border-sky-700"
                : "text-neutral-500"
            }
            to="/coin-list"
          >
            Coin List
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
