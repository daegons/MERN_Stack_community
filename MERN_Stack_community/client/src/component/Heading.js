import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1>Heading(React)</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <Link to="/">home</Link>
        <Link to="/upload">upload</Link>
        <Link to="/list">list</Link>
      </div>
    </div>
  );
};

export default Heading;
