import Link from "next/link";

function Header() {
  return <header className={"h-[100px] p-2  flex from-gray-600 to-gray-300 bg-gradient-to-r"}>
    <Link href={"/"}>
      <div className="h-full  p-2 border-r-2 border-solid border-blue-300 flex items-center justify-center ">First
        version
      </div>
    </Link>

  </header>;
}

export default Header;