import React from "react";
import { Link } from "react-router-dom";
import "./styles/MenuOption.css";
import Avatar from "@material-ui/core/Avatar";
function MenuOption({ link }) {
  return (
    <div className="menuOption">
      <Link to={`/${link}`} className="menuOption__link">
        {link}
      </Link>
      <Avatar
        alt="Profile photo"
        className="menuOption__userPhoto"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPRCvXQJKmljRctLnk0f1wuHHUPOm_opTVzA&usqp=CAU"
      />
    </div>
  );
}

export default MenuOption;
