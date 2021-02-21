import Avatar from "@material-ui/core/Avatar";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import MicIcon from "@material-ui/icons/Mic";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import React from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css";
const Header = () => {
  const [inputSearch, setInputSearch] = React.useState("");
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />

        <Link to="/">
          <img
            className="header-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_YouTube_%282005-2011%29.svg/189px-Logo_of_YouTube_%282005-2011%29.svg.png"
            alt="youtube"
          ></img>
        </Link>
      </div>
      <div className="header-input">
        <input
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_search" />
        </Link>
      </div>
      <div className="header-icons">
        <MicIcon className="header_icon" />
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />

        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
};

export default Header;
