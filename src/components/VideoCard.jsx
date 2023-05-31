import React, { useState } from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const VideoCard = ({ postId,submission, creator, reaction, comment }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoPlay = (videoUrl) => {
    console.log("Video played");
    setCurrentVideo(videoUrl);
  };
  
  const handleThumbnailClick = (videoUrl) => {
    console.log("Thumbnail clicked");
    console.log(videoUrl);
    console.log("currentvideo");
    console.log(currentVideo);
    if (currentVideo !== videoUrl) {
      setCurrentVideo(videoUrl);
    } else {
      setCurrentVideo(null); // Stop playing if clicked again
    }
  };
  
 

  return (
    <Link to="#" onClick={() => handleThumbnailClick(submission?.mediaUrl)}>
      <div className="flex flex-col mb-8">
        <div className="relative h-65 md:h-30 md:rounded-xl overflow-hidden">
          <ReactPlayer
            className="react-player"
            url={submission?.mediaUrl}
            id={submission?.mediaUrl}
            controls={true}
            light={submission?.thumbnail}
           
            width={"100%"}
            playing={currentVideo == submission?.mediaUrl}
            onPlay={() =>  handleVideoPlay(submission?.mediaUrl)}
            onPause={() => setCurrentVideo(null)}
            onEnded={() => setCurrentVideo(null)}
          />
        </div>

        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={creator?.pic}
                alt="creator"
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {creator?.name}
            </span>
            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(reaction?.count, 2)} reaction`}</span>
              <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
                .
              </span>
              <span>{`${abbreviateNumber(comment?.count, 2)} comments`}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;