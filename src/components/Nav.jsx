import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg d-flex justify-content-between align-items-center"
        style={{
          position: "absolute",
          zIndex: 4,
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Set a semi-transparent background color
          backdropFilter: "blur(10px)",
          width: "100%",
          padding: "0 20px",
        }}
      >
        <img
          className="logo"
          src="./images/logo.png"
          alt=""
          width="100px"
          height="50px"
        />
        <button className="btn btn-outline-success">Login</button>
      </nav>
      {/* hi */}
    </div>
  );
}
