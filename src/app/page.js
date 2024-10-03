export default function Home() {
  
  return (
    
    <>
      <div className="">
        <div className="interface">
          <div className="min-h-screen flex">
            {/* Left Sidebar */}
            <div className="w-1/4 border-r">
              {/* Rows */}
              <div className="space-y-3">
                {Array.from({ length: 14 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-12 bg-white border-b shadow-sm"
                  ></div>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="w-3/4 bg-offwhite p-4 shadow-md">
              {/* Top bar with circle icon */}
              <div className="flex items-center justify-start bg-white space-x-4 mtmb-4 p-3 mb-3">
                <div className="h-8 w-8 bg-purple-300 rounded-full"></div>
              </div>

              {/* Card/Block Elements */}
              <div className="flex flex-col space-y-10 w-full">
                {/* White and Yellow Blocks */}
                <div className="bg-yakyellow h-24 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-md p-4 w-2/3 ml-auto"></div>
                <div className="bg-white h-24 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md p-4 w-2/3"></div>
                <div className="bg-yakyellow h-24 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-md p-4 w-2/3 ml-auto"></div>
                <div className="bg-white h-24 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md p-4 w-2/3"></div>
                <div className="bg-yakyellow h-24 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-md p-4 w-2/3 ml-auto"></div>
              </div>
              <div className="absolute mb-0 mt-10 bg-white h-64">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
