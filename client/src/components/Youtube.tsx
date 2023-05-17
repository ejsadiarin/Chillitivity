import { useState } from 'react'
import { videoData } from '../lib/videoData';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// const apiKey = "AIzaSyDjw87K6xjMnMtfgvgFMuZsDj8BZ0d37Aw"; // change and put into .env
// const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSJ4gkVC6NrvII8umztf0Ow&eventType=live&maxResults=3&q=news&type=video&key=${apiKey}`;


export default function Youtube() {
  const [videoId, setVideoId] = useState(videoData[0].videoId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // validate link sent by getting the last 11 characters (video Id)

  function handlePrev() {
    setTimeout(() => {
      console.log("loading");
      setIsLoading(false);
      setCurrentIndex((prevIndex) => prevIndex === 0 ? videoData.length : prevIndex - 1);
      setVideoId(videoData[currentIndex].videoId);
    }, 1000);

    setIsLoading(true);
  }

  function handleNext() {
    setTimeout(() => {
      console.log("loading");
      setIsLoading(false);
      setCurrentIndex((prevIndex) => prevIndex === videoData.length - 1 ? 0 : prevIndex + 1);
      setVideoId(videoData[currentIndex].videoId);
    }, 1000);

    setIsLoading(true);
  }

  // Check YouTube iframe API reference for customization
 // test 
  return (
    <div>

      {/* Iframe div with loading skeleton */}
      <div>
        {isLoading ? (
          // skeleton ui here (react-loading-skeleton)
          <>
            <Skeleton className='w-iframeWidth h-iframeHeight' baseColor='#1f2f3f' highlightColor='#7cc0d8'/>
          </>
        ) : (
          <>
            {/* <h1 className='text-sm'>lofi hip hop radio 📚 - beats to relax/study to</h1> */}
            <iframe 
              width="100" 
              height="100" 
              title="YouTube video player" 
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0" 
              unselectable='on'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              className='w-iframeWidth h-iframeHeight' 
              />
          </>
        )}
      </div>

      <div className='flex gap-5'>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
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