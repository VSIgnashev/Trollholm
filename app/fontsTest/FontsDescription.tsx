"use client"
import React, {useState} from "react";

function FontsDescription() {
  const [isOpen, setIsOpen] = useState(true);

  return <div className="bg-gray-800 p-2 w-[170px] absolute right-[2%]">
    <div className="" onClick={() => setIsOpen(prev => !prev)}>

      {isOpen ? "Close" : "Open"}
    </div>

    {isOpen &&
        <div className="pt-4">
            Created utility funciton to replace some letters with other font.
            <br/>
            <div className="pt-2">
                TODO: Purify text prop to exclude XSS vulnerabilities
            </div>
        </div>}
  </div>
}

export default FontsDescription