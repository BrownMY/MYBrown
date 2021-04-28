import React from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const HomeIcon = () => {
  return (
    <div>
      <div class="icon">
        <PersonOutlineIcon style={{ fontSize: 50 }} />
        <p className="p-nav">Home</p>
      </div>
      <p class="p-mobile">H</p>
    </div>
  );
};

export default HomeIcon;
