import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../assests/icon.png";
import Menubar from "../assests/menu-bar.png";

import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="w-full sm:static fixed top-0 z-10 sm:h-20 h-16 bg-[#0f2027] flex justify-between">
      <div className="h-full sm:w-32 w-24 flex justify-center items-center">
        <div className="sm:w-[56px] sm:h-[56px] w-[45px] h-[45px]">
          <Link href={"/#home"}>
            <Image
              src={Logo}
              alt="logo"
              width={1024}
              height={1024}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="items-center space-x-10 pr-12 sm:flex hidden">
        <a
          href="/#home"
          className="text-white font-sans hover:text-[#db36a4] cursor-pointer 
        transition-all duration-150"
        >
          Home
        </a>
        <a
          href="/#about"
          className="text-white font-sans hover:text-[#db36a4] cursor-pointer
        transition-all duration-150"
        >
          About
        </a>
        <a
          href="/#how-to-use"
          className="text-white font-sans hover:text-[#db36a4] cursor-pointer
        transition-all duration-150"
        >
          How to Use
        </a>
      </div>

      <div className="sm:hidden flex sm:w-24 w-16 h-full justify-center items-center">
        <div
          className="text-xl"
          onClick={() => {
            setShowNav((prevShowNav) => {
              setShowNav(!prevShowNav);
            });
          }}
        >
          {showNav ? (
            <AiOutlineClose className="text-white" />
          ) : (
            <AiOutlineBars className="text-white" />
          )}
        </div>
      </div>

      <div
        className={`sm:hidden visible absolute w-full h-60 bg-[#0f2027] top-16 left-0 flex flex-col justify-evenly items-center
        ${
          !showNav ? "-translate-x-full  " : "translate-x-0  "
        } transform duration-100 z-10`}
      >
        <a href="/#home" className="text-white font-sans ">
          Home
        </a>
        <a href="/#about" className="text-white font-sans ">
          About
        </a>
        <a href="/#how-to-use" className="text-white font-sans ">
          How to Use
        </a>
      </div>
    </div>
  );
};

export default Nav;
