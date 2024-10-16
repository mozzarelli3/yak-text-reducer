"use client";

import Image from "next/image";
import InputTextBar from "./components/InputChatBar";

export default function Home() {
  return (

    <>
      <div className="">
        <div className="interface">
          <div className="min-h-screen flex">

            {/* --- Left Sidebar --- */}
            <div className="w-1/4 border-r h-screen overflow-y-scroll scrollbar-thin hidden md:block">
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
            <div className="w-full md:w-3/4 bg-offwhite shadow-md relative">
              
              {/* Top bar with circle icon */}
              <div className="flex items-center justify-start bg-white space-x-4 mb-4 p-4 shadow-md h-20">
                <div className="h-10 w-10 bg-purple-300 rounded-full"></div>
                <p className="font-bold text-lg">Contact Name</p>
              </div>
              
              {/* Card/Block Elements */}
              <div className="flex flex-col space-y-10 w-full p-4">
                <div className="bg-yakyellow h-24 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-md p-4 w-2/3 ml-auto"></div>
                <div className="bg-white h-24 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md p-4 w-1/2"></div>
                <div className="bg-yakyellow h-24 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-md p-4 w-1/2 ml-auto"></div>
                <div className="bg-white h-24 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md p-4 w-2/3"></div>
                <div className="bg-yakyellow h-24 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-md p-4 w-2/3 ml-auto"></div>
              </div>
              
              {/* --- AI summary feature --- */}
              <div className=" w-full h-72 bg-white transition-all p-4 absolute bottom-0">

                {/* InputTextBar container */}
                <div className="absolute bottom-0 left-0 w-full bg-white px-4 shadow-2xl place-content-center">
                  <InputTextBar />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
