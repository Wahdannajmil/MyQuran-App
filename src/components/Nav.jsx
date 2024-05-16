import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "typeface-poppins";
import logoImage from "../assets/logoalquran.png";

const Header = () => {
  const [date, setDate] = useState("2023-12-30");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <nav className="header p-4 fixed top-0 w-full font-poppins" style={{ backgroundColor: "#ff4d6d" }}>
      <div className="header mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg flex items-center">
          <img src={logoImage} alt="Logo" className="h-10 w-auto mr-2" />
        </div>
        <div className="lg:hidden">
          <button id="menu-toggle" className="text-white focus:outline-none flex items-center">
            <FontAwesomeIcon icon={faInfoCircle} />
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="ml-2 bg-transparent border-none text-white"
              style={{ colorScheme: "dark" }} // This makes the date picker look good on dark backgrounds
            />
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <FontAwesomeIcon icon={faInfoCircle} className="text-white" />
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="bg-transparent border-none text-white"
            style={{ colorScheme: "dark" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
