import { FiBook, FiCheckSquare, FiHome, FiUser } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="bg-[#0a101a] ">
      <FiHome className="w-[5rem] h-[10rem]" />
      <FiBook className="w-[5rem] h-[10rem]" />
      <FiCheckSquare className="w-[5rem] h-[10rem]" />
      <FiUser className="w-[5rem] h-[10rem]" />
    </div>
  );
}
