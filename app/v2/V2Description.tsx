import React, {useState} from "react";

function V2Description() {
  const [isOpen, setIsOpen] = useState(true);

  return <div className="bg-gray-800 p2 w-[170px] absolute right-[5%]">
    <div className="" onClick={() => setIsOpen(prev => !prev)}>

      {isOpen ? "Close" : "Open"}
    </div>

    {isOpen &&
        <div className="pt-4">
            Areas tags removed due to a lot of calculations. Zoom in and out added. Dragging works.
        </div>}
  </div>
}

export default V2Description