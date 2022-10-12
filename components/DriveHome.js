import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

import Nav from "./Nav";
import LoadingAnimation from "../assests/loading-animation.gif";
import Image from "next/image";
import { fetchUrl } from "../services/fetchUrl";

const videoSrc = {
  type: "video",
};

const DriveHome = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const [type, setType] = useState();
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const { url: queryUrl, type: queryType } = router.query;

    if (queryUrl && queryType) {
      fetchUrlFromBackend(queryUrl, queryType);
      setType(queryType);
    }
  }, [router.query]);

  const fetchUrlFromBackend = async (queryUrl, queryType) => {
    const data = await fetchUrl(queryUrl, queryType);

    setData(data);
    videoSrc.title = data.title;
    videoSrc.sources = [{ src: data.link, type: "video/mp4" }];
    videoSrc.poster = "https://i.postimg.cc/CKYqfhF7/icon.png";
  };

  return (
    <div className="w-full min-h-screen bg-[#202a43] pb-20">
      <Nav />

      <div className="pt-24 w-full flex justify-center items-center">
        <div className="sm:w-2/3 w-11/12 h-auto pt-10 bg-white flex flex-col items-center justify-center">
          {!data ? (
            <div>
              <div className="sm:w-[280px] sm:h-[280px] w-[180px] h-[180px]">
                <Image
                  src={LoadingAnimation}
                  alt="loading"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="font-mono animate-pulse sm:text-base text-sm mb-10 text-center">
                Loading...Please Wait
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="w-11/12 mx-auto">
                <div className="text-base font-mono font-semibold">
                  Name:{" "}
                  {type == "mediafire"
                    ? data?.title
                    : data?.title.split("mp4")[0]}
                </div>
                <div className="text-base font-mono font-semibold mt-5">
                  Size:{" "}
                  {type == "mediafire"
                    ? data?.size
                    : data.title.length > 0 &&
                      data?.title.split("(")[1].replace(")", "B")}
                </div>
              </div>

              <div className="w-full h-32 bg-[#f5f5f5] mt-10 flex items-center justify-evenly">
                <div
                  className="sm:w-32 sm:h-12 w-28 h-10 bg-[#db36a4] flex justify-center items-center text-white
            font-sans sm:tracking-widest tracking-wide font-black cursor-pointer hover:scale-105"
                  onClick={() => {
                    setShowPlayer(!showPlayer);
                  }}
                >
                  Watch
                </div>

                <a href={`${data.link}`} target="_blink">
                  <div
                    className="sm:w-32 sm:h-12 w-28 h-10 bg-[#11998e] flex justify-center items-center text-white
            font-sans tracking-widest font-black cursor-pointer hover:scale-105"
                  >
                    Download
                  </div>
                </a>
              </div>
            </div>
          )}

          {showPlayer && (
            <div className="sm:w-10/12 w-11/12 mx-auto mb-10">
              <Plyr source={videoSrc} autoPlay />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriveHome;
