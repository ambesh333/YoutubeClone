import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import Pagination from "./Pagination";
import { fetchDataFromApi } from "../utils/api";
import { useLocation } from "react-router-dom";

const Feed = () => {
  const { loading ,searchResults} = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // const [searchResults, setSearchResults] = useState([]);
 
  const fetchData = async (page) => {
    try {
      
      const data = await fetchDataFromApi(`page=${page}`);
      const totalPages = 9; // Set the total number of pages to 9
      setTotalPages(totalPages);
     
      // Update searchResults in the context or state based on your implementation
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    // Fetch data for initial page
    fetchData(currentPage);
  }, [currentPage]);
  console.log("page no")
  console.log(currentPage);
  
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
  
  let location = useLocation();
  useEffect(() => {
    console.log("Path name")
      console.log(location.pathname);
    }, [location]);

 
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