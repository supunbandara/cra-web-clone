import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Context } from "../context/contextAPI";
import Sidebar from "./Sidebar";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchTerm } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchFromAPI(`search/?q=${searchTerm}`).then((res) => {
      setLoading(true);
      setResult(res?.contents);
      setLoading(false);
    });
  }, [searchTerm]);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Sidebar />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item.video;
            return <SearchResultVideoCard key={video.videoId} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
