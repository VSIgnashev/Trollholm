"use client"

import {useState} from "react";

function TestComp() {

  const mapSize = {
    width: 2048,
    height: 1536
  }

  const mapRatio = mapSize.width / mapSize.height;

  const actualMapSize = {
    width: 800,
    height: 800 / mapRatio
  }

  const coords = [
    {x1: 526, y1: 554, x2: 412, y2: 516},
    {x1: 209, y1: 979, x2: 350, y2: 1015},
    {x1: 318, y1: 1426, x2: 151, y2: 1382},
    {x1: 569, y1: 183, x2: 681, y2: 230},
    {x1: 1019, y1: 251, x2: 889, y2: 213},
    {x1: 763, y1: 601, x2: 889, y2: 659},
    {x1: 574, y1: 865, x2: 697, y2: 923},
    {x1: 842, y1: 1167, x2: 985, y2: 1225},
    {x1: 1068, y1: 1017, x2: 1200, y2: 1076},
    {x1: 1694, y1: 1165, x2: 1892, y2: 1230},
    {x1: 1088, y1: 470, x2: 1238, y2: 597},
    {x1: 1282, y1: 63, x2: 1399, y2: 127},
    {x1: 1238, y1: 233, x2: 1376, y2: 280},
    {x1: 1398, y1: 313, x2: 1528, y2: 358},
    {x1: 1740, y1: 223, x2: 1873, y2: 268},
    {x1: 1633, y1: 483, x2: 1814, y2: 539},
    {x1: 1752, y1: 606, x2: 1939, y2: 662}
  ];


  type MapSize = {
    width: number,
    height: number
  }

  type Coordinates = {
    x1: number,
    y1: number,
    x2: number,
    y2: number
  }

  type CalculateCoordinatesArgs = {
    coordinates: Coordinates,
    mapSize: MapSize,
    newSize: MapSize
  }


  function CalculateCoordinates(args: CalculateCoordinatesArgs): Coordinates {
    const scaleX = args.newSize.width / args.mapSize.width;
    const scaleY = args.newSize.height / args.mapSize.height;


    return {
      x1: Number((args.coordinates.x1 * scaleX).toFixed(2)),
      y1: Number((args.coordinates.y1 * scaleY).toFixed(2)),
      x2: Number((args.coordinates.x2 * scaleX).toFixed(2)),
      y2: Number((args.coordinates.y2 * scaleY).toFixed(2))
    }

  }

  const actualCoords = coords.map((c) => CalculateCoordinates({
    coordinates: c,
    mapSize: mapSize,
    newSize: actualMapSize
  }))

  const Desctiption = () => {

    const [isOpen, setIsOpen] = useState(true);

    return <div className="bg-gray-800 p2 w-[170px] absolute right-[5%]">
      <div className="" onClick={() => setIsOpen(prev => !prev)}>

        {isOpen ? "Close" : "Open"}
      </div>

      {isOpen &&
          <div className="pt-4">Auto calculated "area" tags coordinates based on current map width. Actual width is
              hardcoded
          </div>}
    </div>
  }

  const DebugPanel = () => {

    const [isOpen, setIsOpen] = useState(false);

    return <div className="absolute left-[5%] bg-gray-800 p-2">

      <div className="" onClick={() => setIsOpen(prev => !prev)}>{isOpen ? "Close" : "Open"}</div>
      {isOpen && <div>
          <div className="flex flex-col gap-2">
            {actualCoords.map((c, i) => {

              return <div
                className={"border-b solid-1 border-b-gray-400"}>Coordinate {i}: {c.x1}, {c.y1}, {c.x2}, {c.y2}</div>
            })}
          </div>
          <div className="pt-3">
              Actual map size: {actualMapSize.width}x{actualMapSize.height}
          </div>
      </div>}
    </div>
  }


  return <div className=" flex justify-center h-screen items-center overflow-hidden">

    <DebugPanel/>
    <Desctiption/>

    <div className="w-[800px] h-[800px] outline-solid outline-4 outline-cyan-700">
      <img src="mainMapWSigns.jpg" useMap="#image-map"/>

      <map name="image-map">
        {actualCoords.map((c, i) => (
          <area
            className={"bg-black"}
            alt=""
            key={i}
            href="https://www.w3schools.com/html/html_intro.asp"
            coords={`${c.x1},${c.y1},${c.x2},${c.y2}`}
            shape="rect"
          />
        ))}

      </map>
    </div>
  </div>
}

export default TestComp;