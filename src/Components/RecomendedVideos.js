import React from "react";
import "../Css/Recommended.css";
import VideoCard from "./VideoCard";
const RecomendedVideos = () => {
  return (
    <div className="recomended_videos">
      <h2>Recommended</h2>
      <div className="videos">
        <VideoCard
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          channel="Naim Ahmed Shuvo"
          timeStamp="3 days ago"
          views="2.3M views"
          title="Become a Web Developer in 10 days"
        />
        <VideoCard
          image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          channel="Naim Ahmed Shuvo"
          timeStamp="3 days ago"
          views="2.3M views"
          title="Become a Web Developer in 10 days"
        />
        <VideoCard
          image="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          channel="Naim Ahmed Shuvo"
          timeStamp="3 days ago"
          views="2.3M views"
          title="Become a Web Developer in 10 days"
        />
        <VideoCard
          image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          channel="Naim Ahmed Shuvo"
          timeStamp="3 days ago"
          views="2.3M views"
          title="Become a Web Developer in 10 days"
        />
        <VideoCard
          image="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          channel="Naim Ahmed Shuvo"
          timeStamp="3 days ago"
          views="2.3M views"
          title="Become a Web Developer in 10 days"
        />
      </div>
    </div>
  );
};

export default RecomendedVideos;
