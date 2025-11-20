"use client";
import DOMPurify from "dompurify";

function SignText({children}: { children: string }) {

  const html = children.replace(/[UHF]/g, (letter) => `<span class="altSign">${letter}</span>`);

  return <span dangerouslySetInnerHTML={{__html: html}}/>
}

export default SignText