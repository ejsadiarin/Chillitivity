import { ChangeEvent, FormEvent, useState } from 'react';

// const apiKey = "AIzaSyDjw87K6xjMnMtfgvgFMuZsDj8BZ0d37Aw"; // change and put into .env
// const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSJ4gkVC6NrvII8umztf0Ow&eventType=live&maxResults=3&q=news&type=video&key=${apiKey}`;

export default function Youtube() {
  const [videoId, setVideoId] = useState("jfKfPfyJRdk");

  // validate link sent by getting the last 11 characters (video Id)

  function handlePrev(e: MouseEvent) {
    e.preventDefault();
  }

    function handleNext(e: MouseEvent) {
      setVideoId();
    }

  // Check YouTube iframe API reference for customization
 // test 
  return (
    <div>
      {/* <h1 className='text-sm'>lofi hip hop radio 📚 - beats to relax/study to</h1> */}
      <iframe 
        width="100" 
        height="100" 
        src={`https://www.youtube.com/embed/${videoId}?`}
        title="YouTube video player" 
        frameBorder="0" 
        unselectable='on'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        className='w-[35rem] h-96' 
      />    
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
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