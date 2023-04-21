import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const ReactYoutube: React.FC = () => {

  const handleOnReady: YouTubeProps['onReady'] = (event: any) => {
    event.target.playVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    onload: (e => e.target.playVideo()),
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
    },
  };

  return <YouTube style={} className='h-16' videoId="jfKfPfyJRdk" opts={opts} onReady={handleOnReady} />;
};

export default ReactYoutube;