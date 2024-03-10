// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white text-center py-4 bg-gradient-to-r from-pink-500 to-purple-500">
      <p className="text-sm">
        Dibuat oleh Wahdan &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
