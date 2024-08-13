import React from "react";

const Button = ({ onClick }) => {
  return (
    <button className="search-button" onClick={onClick}>
      Search
    </button>
  );
};

export default Button;
