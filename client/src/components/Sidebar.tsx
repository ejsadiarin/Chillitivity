import { useState } from "react";
import { FiBook, FiCheckSquare, FiHome, FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenMenu() {
    if (isOpen) setIsOpen(false);
    if (isOpen === false) setIsOpen(true);
  }

  return (
    <div className="bg-[#0a101a] p-3">
      <div className="flex items-center gap-7">
        {/* TODO: change GiHamburgerMenu to something when it is clicked(opened) */}
        <GiHamburgerMenu
          className="w-[3rem] h-[5rem] cursor-pointer"
          onClick={handleOpenMenu}
        />
        <h1 className="font-mono text-4xl text-white ">Chillitivity</h1>
      </div>
      {isOpen && (
        <div className="bg-[#0a101a] h-auto w-screen absolute left-0 transition duration-300 transform ease-in-out flex flex-col">
          <IconButton>
            <FiHome className="w-[3rem] h-[5rem]" />
          </IconButton>
          <IconButton>
            <FiBook className="w-[3rem] h-[5rem]" />
          </IconButton>
          <IconButton>
            <FiCheckSquare className="w-[3rem] h-[5rem]" />
          </IconButton>
          <IconButton>
            <FiUser className="w-[3rem] h-[5rem]" />
          </IconButton>
        </div>
      )}
    </div>
  );
}

// wrapper for icons, idk how to make implement it yet
function IconButton({ children }) {
  return <button className="cursor-pointer  border-b-black">{children}</button>;
}
