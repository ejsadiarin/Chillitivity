import { useState } from 'react'
import { videoData } from '../lib/videoData';

// const apiKey = "AIzaSyDjw87K6xjMnMtfgvgFMuZsDj8BZ0d37Aw"; // change and put into .env
// const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSJ4gkVC6NrvII8umztf0Ow&eventType=live&maxResults=3&q=news&type=video&key=${apiKey}`;


export default function Youtube() {
  const [videoId, setVideoId] = useState(videoData[0].videoId);
  const [currentIndex, setCurrentIndex] = useState(0);

  // validate link sent by getting the last 11 characters (video Id)

  function handlePrev() {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? videoData.length : prevIndex - 1);
    setVideoId(videoData[currentIndex].videoId);
  }

    function handleNext() {
      setCurrentIndex((prevIndex) => prevIndex === videoData.length - 1 ? 0 : prevIndex + 1);
      setVideoId(videoData[currentIndex].videoId);
    }

  // Check YouTube iframe API reference for customization
 // test 
  return (
    <div>
      {/* <h1 className='text-sm'>lofi hip hop radio 📚 - beats to relax/study to</h1> */}
      <iframe 
        width="100" 
        height="100" 
        title="YouTube video player" 
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0" 
        unselectable='on'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        className='w-[20rem] h-[10rem]' 
      />
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