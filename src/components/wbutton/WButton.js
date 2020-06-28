import React from "react";
import "./wbutton.scss";

const WButton = ({ children, className, onClick, style }) => {
  return (
    <button onClick={onClick} className={`wbutton ${className}`} style={style}>
      {children}
    </button>
  );
};

export default WButton;
