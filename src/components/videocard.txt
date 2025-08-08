const VideoCard = ({ video }) => (
  <div className="bg-white rounded shadow-md overflow-hidden w-full sm:w-72">
    <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover"/>
    <div className="p-4">
      <h3 className="font-semibold text-lg">{video.title}</h3>
      <p className="text-sm text-gray-600">{video.teacher} · {video.duration}</p>
      <p className="text-sm mt-1 text-gray-500">{video.book} · {video.topic}</p>
    </div>
  </div>
);

export default VideoCard;
