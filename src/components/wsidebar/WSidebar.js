import React from "react";
import clsx from "clsx";
//import "./wsidebar.scss";

// import WCol from "../wgrid/WCol";
// import WRow from "../wgrid/WRow";

function WSidebar({ children, className, onClick, style, color, ...other }) {
  let classes = clsx(
    className,
    color
  );

  return (
    <nav onClick={onClick} className={`wsidebar ${classes}`} style={style} {...other}>
      {children}
    </nav>
  );
};

export default WSidebar;
