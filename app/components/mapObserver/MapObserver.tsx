"use client"

import React, {useEffect, useRef, useState} from "react";
import Signs from "@/app/v3/signs/Signs";


function MapObserver() {


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

  return (
    <div
      className="w-full relative h-full overflow-hidden border-solid border-4 border-cyan-700  "

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
        <Signs/>
        <img src="mapNoSign.png"
             draggable={false}
             style={{width: 2048, minWidth: 2048, height: 1536, display: "block", objectFit: "cover"}}/>

      </div>


    </div>

  )

}

export default MapObserver