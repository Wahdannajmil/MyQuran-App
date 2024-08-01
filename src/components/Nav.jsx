import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import "typeface-poppins";
import logoImage from "../assets/logoalquran.png";

const Header = () => {
  return (
    <nav className="header p-4 fixed top-0 w-full font-poppins z-50" style={{ backgroundColor: "#ff4d6d" }}>
      <div className="header mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg flex items-center">
          <img src={logoImage} alt="Logo" className="h-10 w-auto mr-2" />
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faHashtag} className="text-white text-3xl" /> {/* Mengganti ikon buku dengan ikon hashtag */}
          <span className="text-white font-bold text-3xl">6</span> {/* Menampilkan nomor khataman */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
