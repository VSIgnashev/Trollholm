import React, {useState} from "react";

function V3Description() {
  const [isOpen, setIsOpen] = useState(true);

  return <div className="bg-gray-800 p-2 w-[170px] absolute right-[5%] z-20">
    <div className="" onClick={() => setIsOpen(prev => !prev)}>

      {isOpen ? "Close" : "Open"}
    </div>

    {isOpen &&
        <div className="pt-4">
            Areas tags removed due to a lot of calculations. Zoom in and out added. Dragging works. Sign added, stall on
            one place despite dragging and zooming, kinda of pop-up added.
        </div>}
  </div>
}

export default V3Description