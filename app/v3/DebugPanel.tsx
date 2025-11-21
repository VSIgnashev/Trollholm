"use client"
import React, {useState} from "react";
import {supabase} from "@/lib/supabaseClient";

function DebugPanel() {

  const [isOpen, setIsOpen] = useState(false);

  const fetchData = async () => {
    const {data, error} = await supabase.from('signs').select('*');
    console.log(data, error)

  }

  const createSign = async () => {

    const {data, error} = await supabase.from("signs").insert([{
      title: "test",
      x: 2400,
      y: 3000,
      description: "testDescription"
    }]);
    console.log(data, error);

  }


  return <div className="absolute left-[5%] bg-gray-800 p-2 z-10">
    <div className="" onClick={() => setIsOpen(prev => !prev)}>{isOpen ? "Close" : "Open"}</div>
    {isOpen && <div>

        <div className="pt-3">
            <div className="" onClick={fetchData}>Get data</div>
            <div className="">Check data</div>
            <div onClick={createSign} className="">Add data</div>
        </div>
    </div>}
  </div>
}

export default DebugPanel