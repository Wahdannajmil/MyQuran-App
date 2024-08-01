import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import "typeface-poppins";
import logoImage from "../assets/logoalquran.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`header p-4 fixed top-0 w-full font-poppins z-50 transition-all ease-in-out duration-300 ${
        scrolled ? 'bg-transparent backdrop-blur-md shadow-lg' : 'bg-[#ff4d6d] text-white'
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.6)" : "#ff4d6d", // Transparent white background when scrolled
        backdropFilter: scrolled ? "blur(6px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none"
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={logoImage} alt="Logo" className="h-10 w-auto mr-2" />
          <span className={`font-bold text-lg ${scrolled ? 'text-[#ff4d6d]' : 'text-white'}`}></span>
        </a>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon
            icon={faHashtag}
            className={`text-3xl ${scrolled ? 'text-[#ff4d6d]' : 'text-white'}`}
            aria-label="Hashtag Icon"
          />
          <span className={`font-bold text-3xl ${scrolled ? 'text-[#ff4d6d]' : 'text-white'}`}>6</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
