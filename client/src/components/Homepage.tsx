import Footer from "./Footer";
import Sidebar from "./Sidebar";
import YoutubePlayer from "./Youtube";

export default function Homepage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Sidebar />
      <div className="bg-slate-900 text-white flex h-screen overflow-hidden flex-col ">
        <div className="flex justify-center items-center m-9 ">
          <YoutubePlayer />
        </div>
      </div>
      <Footer />
    </div>
  );
}
