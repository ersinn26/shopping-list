import React from "react";

import "./Header.css";

const Header = ({ categories }) => {
  return (
    <div className="header">
      <h1>Shopping List</h1>
      {categories.map((item) => (
        <div className="header-button" key={item}>
          <button >{item.toUpperCase()}</button>
        </div>
      ))}
    </div>
  );
};

export default Header;
