import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import "typeface-poppins";
import logoImage from "../assets/logoalquran.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Format the date as "Month Day, Year" (e.g., "August 1, 2024")
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString(undefined, options));
  }, []);

  return (
    <nav
      className={`header p-4 fixed top-0 w-full font-poppins z-50 transition-all ease-in-out duration-300 ${
        scrolled ? 'bg-transparent backdrop-blur-md shadow-lg' : 'bg-[#ff4d6d] text-white'
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.6)" : "#ff4d6d", // Transparent white background when scrolled
        backdropFilter: scrolled ? "blur(2px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none"
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={logoImage} alt="Logo" className="h-10 w-auto mr-2" />
          <span className={`font-bold text-lg ${scrolled ? 'text-[#ff4d6d]' : 'text-white'}`}></span>
        </a>
        <div className="flex flex-col items-center">
          <span
            className={`text-xl font-bold ${scrolled ? 'text-[#ff4d6d]' : 'text-white'}`}
            aria-label="Khataman ke"
          >
            Khataman ke <FontAwesomeIcon icon={faHashtag} className={`text-xl ${scrolled ? 'text-[#ff4d6d]' : 'text-white'}`} /> 13
          </span>
          {/* <span
            className={`text-sm ${scrolled ? 'text-[#ff4d6d]' : 'text-white'}`}
          >
            {currentDate}
          </span> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
