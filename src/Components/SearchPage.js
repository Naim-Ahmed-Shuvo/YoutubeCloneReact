import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import React from "react";
import "../Css/SearchPage.css";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr></hr>
      <ChannelRow
        image="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        channel="NA Shuvo Tec"
        verified
        subs="34k"
        noOfVideos="342"
        description="You can find awsome programming"
      />
      <hr />
      <VideoRow
        views="34M"
        subs="10k"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining e"
        title="Let's build a youtube-clone with React.js"
        channel="Hello Tec"
        timeStamp="13 hours ago"
        image="https://images.pexels.com/photos/34407/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <VideoRow
        views="34M"
        subs="10k"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining e"
        title="JavaScript in 10 minutes"
        channel="Hello Tec"
        timeStamp="13 hours ago"
        image="https://images.pexels.com/photos/4584830/pexels-photo-4584830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </div>
  );
};

export default SearchPage;
