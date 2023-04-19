import axios from 'axios';

export default function Videos() {

  async function getVideos() {
    const apiKey = "AIzaSyDjw87K6xjMnMtfgvgFMuZsDj8BZ0d37Aw";
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSJ4gkVC6NrvII8umztf0Ow&eventType=live&maxResults=3&q=news&type=video&key=${apiKey}`;
  
    const vids = await axios.get(url);
    console.log(vids);
  
  }

  return(
    <div>
      <h1>videos</h1>
    </div>
  );
}

