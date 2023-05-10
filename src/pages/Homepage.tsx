import ReactYoutube from "../components/ReactYoutube";
import Videos from "../components/Videos";
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';


export default function Homepage() {

  
  return (
    <div className="bg-slate-900 text-white flex flex-col 
     w-screen h-screen overflow-hidden"
    >
      {/* <h1 className="font-mono text-7xl">Chillitivity</h1> */}
      {/* <div className="flex justify-center items-center m-9 "> */}
        {/* <AiFillCaretLeft className="text-red-500 text-9xl"/> */}
        <Videos />
        {/* use React Youtube for built in opts, and params */}
        {/* <AiFillCaretRight className="text-red-500 text-9xl"/> */}
      {/* </div> */}

    </div>
  );
}