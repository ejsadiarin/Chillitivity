import { useState } from "react";
import { videoData } from "../lib/videoData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AiFillBackward, AiOutlineForward } from "react-icons/ai";

// const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSJ4gkVC6NrvII8umztf0Ow&eventType=live&maxResults=3&q=news&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
export default function Youtube() {
  const [videoId, setVideoId] = useState(
    videoData[videoData.length - 1].videoId
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // validate link sent by getting the last 11 characters (video Id)

  function handlePrev(): void {
    setTimeout(() => {
      console.log("loading");
      setIsLoading(false);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? videoData.length : prevIndex - 1
      );
      setVideoId(videoData[currentIndex].videoId);
    }, 1000);

    setIsLoading(true);
  }

  function handleNext(): void {
    setTimeout(() => {
      console.log("loading");
      setIsLoading(false);
      setCurrentIndex((prevIndex: number) =>
        prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
      );
      setVideoId(videoData[currentIndex].videoId);
    }, 1000);

    setIsLoading(true);
  }

  // Check YouTube iframe API reference for customization
  return (
    <div>
      {/* Iframe div with loading skeleton */}
      <div>
        {isLoading ? (
          // skeleton ui here (react-loading-skeleton)
          <>
            <Skeleton
              className="w-iframeWidthMobile h-iframeHeight"
              baseColor="#1f2f3f"
              highlightColor="#7cc0d8"
            />
          </>
        ) : (
          <>
            <h1 className="text-sm">
              Enjoy, chill, study, and get your cup of tea or coffee
            </h1>
            <iframe
              width="100"
              height="100"
              title="YouTube video player"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&disablekb=1&rel=0`}
              frameBorder="0"
              unselectable="on"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-iframeWidthMobile h-iframeHeight"
            />
          </>
        )}
      </div>

      <div className="flex gap-5">
        <div onClick={handlePrev} className="flex items-center">
          <AiFillBackward />
          <p>Prev</p>
        </div>
        <button onClick={handleNext} className="flex items-center">
          <p>Next</p>
          <AiOutlineForward />
        </button>
      </div>
    </div>
  );
}

// YOUTUBE API (archive for review)
// useEffect(() => {
//   async function getVideos() {
//     const videos = await axios.get(url);
//     console.log(videos);

//     setTitle(videos.data.items[1].snippet.title);

//   }
//   getVideos();
// }, [])
