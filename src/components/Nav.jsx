import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "typeface-poppins";

import logoImage from "../assets/logoalquran.png";

const Header = () => {
  return (
    <nav className="header p-4 fixed top-0 w-full font-poppins bg-gradient-to-r from-pink-500 to-purple-500">
      <div className="header mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg flex items-center">
          <img src={logoImage} alt="Logo" className="h-10 w-auto mr-2" />
        </div>
        <div className="lg:hidden">
          <button id="menu-toggle" className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span className="ml-2">30 Des 2023</span>
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="py-2 px-4 text-white flex items-center">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span className="ml-2">30 Desember 2023</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
