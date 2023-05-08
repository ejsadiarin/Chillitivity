import { useState } from "react";

function VideoLay() {
  const [data, setData] = useState(0);

  const handleSomething = () => {
    console.log("something idk");
  }
  
  return (
    <>
     <h1 className="text-lg">Video Lasting test</h1> 
     <h1 className="text-lg">Video Lasting test</h1> 
    </>
  );
}