// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white text-center py-4" style={{ backgroundColor: "#ff4d6d" }}>
      <p className="text-sm">
        Dibuat oleh Wahdan &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
