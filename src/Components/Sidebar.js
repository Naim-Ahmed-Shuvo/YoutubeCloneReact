import React from "react";
import SidebarRows from "./SidebarRows";

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRows selected Icon={HomeIcon} title="home" />
      <SidebarRows Icon={WhatshotIcon} title="trending" />
      <SidebarRows Icon={SubscriptionsIcon} title="subscription" />
      <hr />
      <SidebarRows Icon={VideoLibraryIcon} title="Library" />
      <SidebarRows Icon={HistoryIcon} title="History" />
      <SidebarRows Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRows Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRows Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      <SidebarRows Icon={ExpandMoreOutlinedIcon} title="Show More" />
      <hr />
    </div>
  );
};

export default Sidebar;
