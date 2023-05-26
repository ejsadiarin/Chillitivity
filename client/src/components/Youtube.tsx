import { useEffect, useRef, useState } from "react";
import { videoData } from "../lib/videoData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  AiFillBackward,
  AiOutlineForward,
  AiOutlinePause,
} from "react-icons/ai";
import YouTube, { YouTubeProps } from "react-youtube";

// const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSJ4gkVC6NrvII8umztf0Ow&eventType=live&maxResults=3&q=news&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
export default function YoutubePlayer() {
  const playerRef = useRef(null);
  const [videoId, setVideoId] = useState(
    videoData[videoData.length - 1].videoId
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load YouTube Player when component mounts
    const script = document.createElement("script");
    script.src = "https://www.youtube/com/iframe_api";
    document.head.appendChild(script);

    window.onYouTubeIframeAPIReady = loadPlayer;

    return () => {
      // Clean up YouTube Player when the component unmounts
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const loadPlayer = () => {
    playerRef.current = new window.YT.Player("youtube-player", {
      videoId: "jfKfPfyJRdk",
      events: {
        onReady: onPlayerReady,
      },
    });
  };

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
  };

  const handlePause = () => {
    if (playerRef.current && playerRef.current.pauseVideo) {
      playerRef.current.pauseVideo();
    }
  };

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
  // https://developers.google.com/youtube/player_parameters
  return (
    <div className="flex flex-col">
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
            <h1 className="text-xs">
              Enjoy, chill, study, and get your cup of tea or coffee
            </h1>
            {/* <iframe */}
            {/*   width="100" */}
            {/*   height="100" */}
            {/*   title="YouTube video player" */}
            {/*   src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&disablekb=1&rel=0`} */}
            {/*   frameBorder="0" */}
            {/*   unselectable="on" */}
            {/*   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" */}
            {/*   className="w-iframeWidthMobile h-iframeHeight m-4" */}
            {/* /> */}
            <div id="youtube-player" />
            <div className="flex justify-between w-iframeWidthMobile m-4 mt-2">
              <button onClick={handlePrev} className="flex items-center ">
                <AiFillBackward />
                <p>Prev</p>
              </button>
              <button onClick={handlePause}>
                <AiOutlinePause />
              </button>
              <button onClick={handleNext} className="flex items-center">
                <p>Next</p>
                <AiOutlineForward />
              </button>
            </div>
          </>
        )}
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
