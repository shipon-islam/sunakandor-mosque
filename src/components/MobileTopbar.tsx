import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function MobileTopbar() {
  const [isExpand, setIsExpand] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  function handleWindowClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest(".searchbar")) {
      setIsExpand(false);
    }
    if (!target.closest(".topbar")) {
      setIsSidebar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <div className="sm:hidden mt-4 grid grid-cols-[3rem_1fr_3rem] items-start topbar">
      <button
        onClick={() => setIsSidebar((prev) => !prev)}
        className="ml-5 mt-[0.3rem] relative"
      >
        <IoNotifications className="text-2xl" />
        <p className="bg-red-500 px-[0.3rem] rounded-full text-[0.6rem] absolute top-0 right-0">
          1
        </p>
      </button>
      <div
        className={`${
          isSidebar ? "right-0" : "-right-[35rem]"
        } absolute top-0  bg-gray-800 w-[80%] h-screen z-10 px-4 transition-all duration-500 sm:hidden`}
      >
        <ul className="space-y-5 mt-8">
          <li>
            <Link onClick={() => setIsSidebar(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsSidebar(false)} to="/tarabi-counter">
              Tarabi Counter
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <h1 className="font-bold text-xl">
          Baitul Mukarram Masjid- <br />
          Arlington
        </h1>
      </div>
      <div
        className={`${
          isExpand ? "w-[90%]" : "w-fit"
        } justify-self-end bg-gray-200 h-fit p-1.5 mr-4 rounded-full  absolute flex searchbar `}
      >
        <button onClick={() => setIsExpand(true)}>
          <BiSearch className="text-xl text-gray-800" />
        </button>
        <input
          className={`${
            isExpand ? "block " : "hidden"
          } w-full text-gray-600 pl-3 bg-transparent focus:outline-none`}
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
}
