import Link from "next/link";
import HeaderNickname from "@/app/components/header/HeaderNickname";

function Header() {
  return <header className={"h-[100px] p-2  flex justify-between from-gray-600 to-gray-300 bg-gradient-to-r"}>
    <div className=" flex">
      <Link href={"/"}>
        <div className="h-full  p-2 border-r-2 border-solid border-blue-300 flex items-center justify-center ">First
          version
        </div>
      </Link><
      Link href={"/v2"}>
      <div
        className="h-full  p-2 border-r-2 border-solid border-blue-300 flex items-center justify-center w-[105px] "> V2
      </div>
    </Link>
      <Link href={"/v3"}>
        <div
          className="h-full  p-2 border-r-2 border-solid border-blue-300 flex items-center justify-center w-[105px] "> V3
        </div>
      </Link><Link href={"/fontsTest"}>
      <div
        className="h-full  p-2 border-r-2 border-solid border-blue-300 flex items-center justify-center w-[105px] "> Fonts
        test
      </div>
    </Link>
    </div>
    <HeaderNickname/>

  </header>;
}

export default Header;