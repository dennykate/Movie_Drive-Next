import Image from "next/image";
import React from "react";

import FooterFilm from "../assests/footer-film.gif";
import Playstore from "../assests/playstore.png";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#202a43] pt-10">
      <div className="max-w-4xl mx-auto h-full flex sm:flex-nowrap flex-wrap">
        <div className="w-[300px] h-full flex justify-center items-center">
          <div className="sm:w-[250px] sm:h-[250px] w-[200px] h-[200px]">
            <Image
              src={FooterFilm}
              alt="footer-film"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="sm:w-2/3 w-10/12 h-full flex justify-evenly sm:mx-0 mx-auto">
          <div className="w-40 h-full sm:py-24 py-12 flex flex-col space-y-5">
            <a
              href="/"
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

          <div className="w-40 h-full sm:py-24 py-12 flex flex-col space-y-5">
            <a
              href="/"
              className="text-white font-sans hover:text-[#db36a4] cursor-pointer 
        transition-all duration-150"
            >
              Our Drive
            </a>
            <a
              href="/#about"
              className="text-white font-sans hover:text-[#db36a4] cursor-pointer
        transition-all duration-150"
            >
              Helps
            </a>
            <div className="w-32 h-10 cursor-pointer">
              <Image
                src={Playstore}
                alt="playstore"
                width={1280}
                height={376}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-16 flex justify-center items-center text-white sm:text-base
        text-xs font-mono font-extralight"
      >
        Copyrights &#169; All rights reserved
      </div>
    </div>
  );
};

export default Footer;
