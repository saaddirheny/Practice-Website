import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNav(){
    setNav(!nav)
  }

  return (
    <div>
      <div className="flex justify-between items-center max-w-[1240px] w-full mx-auto px-4 text-white">
        <h1 className="text-[#006859] text-2xl font-bold">Practice.</h1>
        <ul className="hidden md:flex">
          <li className="p-4 cursor-pointer">Home</li>
          <li className="p-4 cursor-pointer">Company</li>
          <li className="p-4 cursor-pointer">Resources</li>
          <li className="p-4 cursor-pointer">About</li>
          <li className="p-4 cursor-pointer">Contact</li>
        </ul>

        <div className="block md:hidden">
          {nav ? <AiOutlineClose onClick={handleNav} size={20}/> : <AiOutlineMenu onClick={handleNav} size={20}/>}
        </div>

        <div className={nav ? "text-white bg-black fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full ease-in-out duration-500" : "fixed left-[-100%]"}>
          <h1 className="text-primary text-2xl font-bold pl-3">Practice.</h1>
          <ul className="">
            <li className="p-2  border-b">Home</li>
            <li className="p-2 border-b">Company</li>
            <li className="p-2 border-b">Resources</li>
            <li className="p-2 border-b">About</li>
            <li className="p-2">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
