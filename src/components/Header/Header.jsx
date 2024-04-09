import React from "react";

const Header = ({ categories }) => {
  return (
    <div className="header">
      <h1>Shopping List</h1>
      {categories.map((item) => (
        <button key={item}>{item}</button>
      ))}
    </div>
  );
};

export default Header;
