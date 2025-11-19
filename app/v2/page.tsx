"use client"

import React, {useEffect, useRef, useState} from "react";
import V2Description from "@/app/v2/V2Description";

function V2() {

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;

    const handleZoom = (e: WheelEvent) => {
      e.preventDefault();
      const minZoom = 0.2;
      const maxZoom = 5;

      setScale(prev => {
        const newScale = prev - e.deltaY * 0.001;
        return Math.min(Math.max(newScale, minZoom), maxZoom);
      });
    };


    el.addEventListener("wheel", handleZoom, {passive: false});

    return () => {
      el.removeEventListener("wheel", handleZoom);
    };
  }, []);

  const DebugPanel = () => {

    const [isOpen, setIsOpen] = useState(false);

    return <div className="absolute left-[5%] bg-gray-800 p-2">

      <div className="" onClick={() => setIsOpen(prev => !prev)}>{isOpen ? "Close" : "Open"}</div>
      {isOpen && <div>

          <div className="pt-3">

          </div>
      </div>}
    </div>
  }


  const [scale, setScale] = useState(1);
  const mapRef = useRef<HTMLDivElement>(null);

  const [offset, setOffset] = useState({x: 0, y: 0});
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({x: 0, y: 0});


  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    setOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false);
  }


  return <div className=" flex gap-4 flex-col justify-center h-screen items-center overflow-hidden">
    <h2 className={"text-5xl"}>Version 2</h2>
    <DebugPanel/>
    <V2Description/>

    <div
      className="w-[800px] relative h-[800px] overflow-hidden outline-solid outline-4 outline-cyan-700  "

      ref={mapRef}

      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className=""
           style={{
             position: "absolute",
             left: `calc(50% + ${offset.x}px)`,
             top: `calc(50% + ${offset.y}px)`,
             transform: `translate(-50%, -50%) scale(${scale})`,
             transformOrigin: "center center",
           }}>
        <div className="absolute bg-cyan-500 w-10 h-10 rounded-4xl left-[200px] top-[200px]"></div>
        <img src="mainMapNoSigns.jpg"
             draggable={false}
             style={{width: 2048, minWidth: 2048, height: 1536, display: "block", objectFit: "cover"}}/>

      </div>


    </div>
  </div>;
}

export default V2;