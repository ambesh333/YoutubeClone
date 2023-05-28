import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/videoLength";
const VideoCard = ({ postId, submission ,creator,reaction,comment}) => {
  // Use postId and thumbnail in the component as needed
  // console.log(postId);
  return (
    <Link to={`data/posts/${submission}`} >
      <div className="flex flex-col mb-8">
        <div className="relative h-65 md:h-30 md:rounded-xl overflow-hidden">
          <img className="h-full w-full object-cover" src={submission?.thumbnail} alt="" />
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={creator?.pic}
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {creator?.name}
            </span>
            {/* <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
              {creator?.name}
              
            </span> */}
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
