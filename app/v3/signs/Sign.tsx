"use client"
import SignText from "@/app/util/mixedFonts";
import signs from "@/app/data/signs";
import React from "react";
import SignType from "@/app/types/signType";

function Sign({sign}: { sign: SignType }) {

  const [isDescriptionOpen, setIsDescriptionOpen] = React.useState(false);

  return <div className={`absolute translate-1/2`} style={{top: `${sign.y}px`, left: `${sign.x}px`}}
  >
    {isDescriptionOpen && <div className="absolute p-5  bg-gray-800 left-15 bottom-10 shadow-lg">
        <div className="absolute top-[10px] right-[10px] cursor-pointer hover:text-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]"
             onClick={() => setIsDescriptionOpen(false)}>close
        </div>
        <h3><SignText size={40}>{signs[0].name}</SignText></h3>
        <div className="">
          {signs[0].description}
        </div>
    </div>}
    <div className="cursor-pointer" onClick={() => setIsDescriptionOpen(prev => !prev)}>
      <SignText size={"lg"}>{signs[0].name}</SignText>
    </div>
  </div>
}

export default Sign