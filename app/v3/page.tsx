"use client"
import MapObserver from "@/app/components/mapObserver/MapObserver";
import V3Description from "@/app/v3/V3Description";
import DebugPanel from "@/app/v3/DebugPanel";

function V3() {


  return <div className=" flex gap-4 flex-col justify-center h-[89.5vh] items-center overflow-hidden">
    <h2 style={{fontFamily: "var(--font-main-sign)"}} className={"text-5xl"}>Version 3</h2>

    <V3Description/>
    <DebugPanel/>
    <MapObserver/>
  </div>;
}

export default V3;