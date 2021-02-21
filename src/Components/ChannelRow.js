import { Avatar } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import React from "react";
import "../Css/ChannelRow.css";
const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_logo" src={image} alt={channel}></Avatar>
      <div className="channelRow_text">
        <h4>
          {channel}
          {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>
        <p>
          {subs} subscribers *{noOfVideos}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
