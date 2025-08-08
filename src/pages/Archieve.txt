import videos from "../data/videos";
import VideoCard from "../components/VideoCard";

const Archive = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">📚 Video Archive</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  </div>
);

export default Archive;
