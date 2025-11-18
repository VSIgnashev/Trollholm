import Image from "next/image";
import TestComp from "@/app/components/testComp/testComp";

export default function Home() {
  return (
    <div className=" flex justify-center h-screen items-center overflow-hidden">


      <TestComp/>

    </div>
  );
}