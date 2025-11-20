"use client";
import DOMPurify from "dompurify";

//TODO: add domPurify

function SignText({children, size = "md"}: { children: string, size?: "md" | "lg" | number }) {

  const html = children.replace(/[UHF]/g, (letter) => `<span class="altSign">${letter}</span>`);

  return <p
    className={`sign ${size === "lg" ? " text-[40px]" : size === "md" ? " text-[27px]" : ""} transition-all  text-shadow-lg hover:text-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]`}

    style={typeof size === "number" ? {fontSize: `${size}px`} : {}}>

    <span dangerouslySetInnerHTML={{__html: html}}/>
  </p>
}

export default SignText