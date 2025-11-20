import React from "react";

import signs from "@/app/data/signs";
import Sign from "@/app/v3/signs/Sign";


function Signs() {
  return (
    <>
      <Sign sign={signs[0]}/>

    </>
  )
}

export default Signs