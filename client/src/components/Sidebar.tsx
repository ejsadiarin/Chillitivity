import { FiBook, FiCheckSquare, FiHome, FiUser } from 'react-icons/fi';  

export default function Sidebar() {
  return (
    <div className="bg-[#0a101a] ">
      <div>Hamburger Menu here for mobile screen - mobile first design</div>
      <FiHome className="w-[5rem] h-[10rem]" />
      <FiBook /> 
      <FiCheckSquare />
      <FiUser />
    </div>
  )
}





