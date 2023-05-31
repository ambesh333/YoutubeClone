import React , {useState}from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const VideoCard = ({ submission ,creator,reaction,comment}) => {
  const [autoplay, setAutoplay] = useState(false);

  const handleThumbnailClick = () => {
    console.log("Thumbnail clicked");
    setAutoplay(true);
  };

  return (
    <Link   to="#" onClick={handleThumbnailClick}>
      <div className="flex flex-col mb-8">
        <div className="relative h-65 md:h-30 md:rounded-xl overflow-hidden">
        <ReactPlayer
            className="react-player"
            url={submission?.mediaUrl}
            controls={true}
            light={submission?.thumbnail}
            width={"100%"}
            playing={autoplay}
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
