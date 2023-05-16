import Sidebar from "./Sidebar";
import Youtube from "./Youtube";

export default function Homepage() {

  function test() {
    // testing vim key motions() =
  }
  
  return (
    <div className="flex ">
      <Sidebar />
      <div className="bg-slate-900 text-white flex flex-col 
      w-screen h-screen overflow-hidden "
      >
        <h1 className="font-mono text-7xl">Chillitivity</h1>
        <div className="flex justify-center items-center m-9 ">
          <Youtube />
        </div>
        <div>
          <h1>test</h1>
        </div>

      </div>
    </div>
  );
}