import axios from 'axios';
import { useEffect, useState } from 'react';

// const apiKey = "AIzaSyDjw87K6xjMnMtfgvgFMuZsDj8BZ0d37Aw"; // change and put into .env
// const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSJ4gkVC6NrvII8umztf0Ow&eventType=live&maxResults=3&q=news&type=video&key=${apiKey}`;

export default function Videos() {
  // const [title, setTitle] = useState([]);

  // useEffect(() => {
  //   async function getVideos() {    
  //     const videos = await axios.get(url);
  //     console.log(videos);
      
  //     setTitle(videos.data.items[1].snippet.title);
    
  //   }
  //   getVideos();
  // }, [])

  const handleOnLoad = () => {

  }

  // Check YouTube iframe API reference for customization
 // test 
  return(
    <div>
      <h1 className='text-sm'>lofi hip hop radio 📚 - beats to relax/study to</h1>
      <iframe 
        width="700" 
        height="450" 
        src="https://www.youtube.com/embed/jfKfPfyJRdk" 
        title="YouTube video player" 
        frameBorder="0" 
        unselectable='on'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        className='w-[80vw] h-[80vh]' 
      />    
    </div>
  );
}

