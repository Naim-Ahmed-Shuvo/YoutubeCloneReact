import React from "react";
const SidebarRows = ({ selected, Icon, title }) => {
  return (
    <div className={`sidebar_row ${selected && "selected"}`}>
      <Icon className="sidebar_row_icon" />
      <h5 className="sidebar_row_title"> {title}</h5>
    </div>
  );
};

export default SidebarRows;
