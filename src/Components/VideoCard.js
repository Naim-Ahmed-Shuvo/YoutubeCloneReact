import Avatar from "@material-ui/core/Avatar";
import React from "react";
import "../Css/VideoCard.css";
const VideoCard = ({ image, title, channel, views, timeStamp }) => {
  return (
    <div className="videoCard">
      <img className="videoCard_thubnail" src={image} alt={title} />
      <div className="videoCard_info">
        <div>
          <Avatar className="videoCard_avatar" src={image} alt={channel} />
        </div>
        <div className="videoCard_text">
          <h4>{title}</h4>
          <h6>{channel}</h6>
          <p>
            {views}.{timeStamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
