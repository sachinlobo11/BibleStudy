import videos from "../data/videos";
import VideoCard from "../components/VideoCard";

const Home = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">📺 Featured Bible Studies</h2>
    <div className="flex flex-wrap gap-6">
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  </div>
);

export default Home;
