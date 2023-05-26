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
    <div className="bg-[#0a101a] ">
      <GiHamburgerMenu
        className="w-[3rem] h-[5rem] cursor-pointer"
        onClick={handleOpenMenu}
      />
      {isOpen && (
        <div className="bg-[#0a101a] h-screen w-screen absolute left-0 transition duration-300 transform ease-in-out">
          <FiHome className="w-[3rem] h-[5rem]" />
          <FiBook className="w-[3rem] h-[5rem]" />
          <FiCheckSquare className="w-[3rem] h-[5rem]" />
          <FiUser className="w-[3rem] h-[5rem]" />
        </div>
      )}
    </div>
  );
}
