// src/components/VideoPlayer.js

import React from "react";

const VideoPlayer = ({ videoUrl, onVideoEnd }) => {
  return (
    <div className="relative w-full h-64">
      <video
        className="w-full h-full object-cover"
        controls
        onEnded={onVideoEnd}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
