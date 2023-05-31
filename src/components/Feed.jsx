import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import Pagination from "./Pagination";
import { fetchDataFromApi } from "../utils/api";



const Feed = () => {
  const { loading ,searchResults} = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  
  

  const fetchData = async (page) => {
    try {
      console.log(`page=${page}`);
       await fetchDataFromApi(`page=${currentPage}`);
      
      
      const totalPages = 9;
      setTotalPages(totalPages);
   
    } catch (error) {
      console.error("Error fetching data:", error);
    }

     
  };
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchData(currentPage);
  }, [currentPage]);

  
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults.map((item) => (
              <VideoCard
                key={item.postId}
                postId={item.postId}
                submission={item.submission}
                creator={item.creator}
                reaction={item.reaction}
                comment={item.comment}

              />
            ))}
        </div>
        <div className="flex justify-center mb-10">
        <Pagination
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          currentPage={currentPage}
        />
        
        </div>
        
      </div>
    </div>
  );
};

export default Feed;