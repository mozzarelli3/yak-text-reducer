"use client";

import Image from "next/image";
import { useState } from "react";
import InputTextBar from "./components/InputChatBar";

const apiUrl = process.env.API_URL;

export default function Home() {
  const [showAISummary, setShowAISummary] = useState(false);

  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <div className="interface flex flex-grow">
          <div className="min-h-screen flex">

            {/* --- Left Sidebar --- */}
            <div className="border-r h-screen overflow-y-auto scrollbar-thin hidden md:block w-96 w-[clamp(300px, 30%, 500px)]">
              <div className="flex items-center justify-start bg-white space-x-4 mb-4 p-4 shadow-md h-20 sticky top-0">
                <Image
                  src="https://www.yakchat.com/yakchat-logo-horizontal.svg"
                  alt="YakChat logo"
                  className="absolute p-5 w-32 h-16 md:w-64 md:h-32"
                  width={300}
                  height={200}
                />
              </div>

              {/* Rows */}
              <div className="space-y-5">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div key={index} className="h-12 bg-white border-b shadow-sm">
                    <span className="flex flex-row">
                      <div className="h-9 w-9 bg-gray-300 rounded-full ml-7 content-center"></div>
                      <div>
                        <div className="h-2 w-28 bg-gray-300 rounded-full ml-10"></div>
                        <div className="h-2 w-48 bg-gray-200 rounded-full ml-10 mt-4"></div>
                      </div>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Right Content Area --- */}
            <div className="flex-grow bg-offwhite shadow-md relative overflow-y-auto">
              {/* Top bar with circle icon */}
              <div className="flex items-center justify-start bg-white space-x-4 mb-4 p-4 shadow-md h-20">
                <div className="ml-5 h-12 w-12 bg-purple-300 rounded-full"></div>
                <div>
                  <div className="h-2 w-32 bg-gray-500 rounded-full ml-10"></div>
                  <div className="h-2 w-48 bg-gray-200 rounded-full ml-10 mt-4"></div>
                </div>
              </div>

              {/* Card/Block Elements */}
              <div className="flex flex-col space-y-10 w-full p-4">
                <div className="bg-yakyellow h-24 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-md p-4 w-2/3 ml-auto"></div>
                <div className="bg-white h-24 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md p-4 w-1/2"></div>
                <div className="bg-yakyellow h-24 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-md p-4 w-1/2 ml-auto"></div>
                <div className="bg-white h-24 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md p-4 w-2/3"></div>
              </div>

              {/* --- AI summary feature --- */}
              <div className={`w-full transition-all p-4 absolute bottom-0 ${
                showAISummary ? "bg-white h-72" : "bg-white h-16"
              }`}>
                {/* InputTextBar container */}
                <div className="absolute bottom-0 left-0 w-full bg-white px-4 shadow-2xl place-content-center">
                  <InputTextBar
                    showAISummary={showAISummary}
                    setShowAISummary={setShowAISummary}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
