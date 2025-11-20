"use client"

import React, {useEffect, useRef, useState} from "react";
import V2Description from "@/app/v2/V2Description";
import MapObserver from "@/app/components/mapObserver/MapObserver";

function V3() {

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
    <h2 style={{fontFamily: "var(--font-main-sign)"}} className={"text-5xl"}>Version 3</h2>
    <DebugPanel/>
    <V2Description/>

    <MapObserver/>
  </div>;
}

export default V3;