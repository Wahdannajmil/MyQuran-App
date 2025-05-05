import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px dashed #999",
        backgroundColor: "#0f0f0f",
        color: "#ccc",
        fontFamily: "Courier New, monospace",
        padding: "1rem",
        fontSize: "0.85rem",
        textAlign: "center",
        letterSpacing: "0.5px",
      }}
    >
      <p style={{ margin: 0 }}>
        // dibuat oleh wahdan — {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
