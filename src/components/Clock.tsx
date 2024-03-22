import { useEffect, useState } from "react";
import mawaqit from "../assets/mawaqit.png";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const hours =
    time.getHours() > 12 ? Number(time.getHours()) - 12 : time.getHours();
  const minitues = time.getMinutes();
  const seconds = time.getSeconds();
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-black rounded-3xl w-fit mx-auto">
      <div className="bg-green-900/70 pb-2 sm:pb-4 2xl:pb-10 px-2 sm:px-6  lg:px-16 2xl:px-32 rounded-xl sm:rounded-3xl text-white mt-4 ">
        {time && (
          <div className="flex items-center justify-center">
            <h3 className="text-[2.4rem] sm:text-[8vw] font-bold">
              {hours < 10 ? `0${hours}` : hours}:
              {minitues < 10 ? `0${minitues}` : minitues}
            </h3>
            <h5 className="text-[1.2rem] sm:text-[3.5vw] font-bold text-gray-300">
              <div>:{seconds < 10 ? `0${seconds}` : seconds}</div>
              <p className="text-[0.9rem] sm:text-[2.7vw] ml-1 sm:ml-2 -mt-3 sm:-mt-4">
                {hours > 12 ? "PM" : "AM"}
              </p>
            </h5>
          </div>
        )}
        <div className="-mt-2">
          <p className="sm:hidden text-sm sm:font-medium text-center">
            16 Shawwal 1444
          </p>
          <p className="text-sm sm:text-[2.4vw] sm:font-medium text-center">
            Sunday, May 3, 2023
          </p>
        </div>
      </div>
      <div className="flex gap-x-5 justify-center items-center py-1">
        <img className="w-6 sm:w-[3.8vw]" src={mawaqit} alt="icon" />
        <div>
          <h1 className="text-md sm:text-[3vw] font-semibold">
            Fajr in 04:45{" "}
          </h1>
        </div>
        <img className="w-6 sm:w-[3.8vw]" src={mawaqit} alt="icon" />
      </div>
    </div>
  );
}
