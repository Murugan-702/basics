import { Search } from "lucide-react";
import VideoCard from "./VideoCard";

const VideoPage = () => {
  return (
    <div className="video-page">
      <div className="search-header">
        <div className="search">
          <Search className="icon" />
          <input itemProp="" type="search" />
        </div>
      </div>
      <div className="search-body">
        <div className="video-card-items">
       {[1,1,1,1].map(()=>(
         <div className="video-card">
         <VideoCard/>
         </div>
       ))}

        </div>
      </div>
    </div>
  );
};

export default VideoPage;
