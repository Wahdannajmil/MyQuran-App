import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "typeface-poppins";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 py-4 font-poppins m-4 rounded-md">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex gap-4">
          <li>
            <NavLink
              exact
              to={"/"}
              className={`text-white hover:text-gray-300 px-3 py-2 rounded transition duration-300 ease-in-out ${
                location.pathname === "/" ? "border-b-2 border-white" : ""
              }`}
            >
              Semua
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to={"/daftar-belum-selesai"}
              className={`text-white hover:text-gray-300 px-3 py-2 rounded transition duration-300 ease-in-out ${
                location.pathname === "/daftar-belum-selesai" ? "border-b-2 border-white" : ""
              }`}
            >
              Belum Selesai
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to={"/daftar-selesai"}
              className={`text-white hover:text-gray-300 px-3 py-2 rounded transition duration-300 ease-in-out ${
                location.pathname === "/daftar-selesai" ? "border-b-2 border-white" : ""
              }`}
            >
              Selesai
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
