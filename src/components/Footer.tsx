import { useState } from "react";
import {
  BsFillCheckCircleFill,
  BsFillSendFill,
  BsWindowPlus,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import mawaqit_logo from "../assets/mawaqit_logo_light_rounded.png";

export default function Footer() {
  const [isArrow, setIsArrow] = useState(false);
  return (
    <div className="sm:hidden">
      <div className="mb-2 relative">
        <h1 className="text-center text-lg">Useful information</h1>
        <button
          onClick={() => setIsArrow((prev) => !prev)}
          className="absolute right-4 top-0"
        >
          {isArrow ? (
            <MdKeyboardArrowDown className="text-2xl" />
          ) : (
            <MdKeyboardArrowRight className="text-2xl" />
          )}
        </button>
      </div>
      {isArrow && (
        <div className="grid grid-cols-2 w-fit mx-auto gap-x-20 mb-4">
          <div>
            <BsFillCheckCircleFill className="text-green-500 inline" /> Donation
          </div>
          <div>
            <BsFillCheckCircleFill className="text-green-500 inline" /> Donation
          </div>
          <div>
            <BsFillCheckCircleFill className="text-green-500 inline" /> Donation
          </div>
          <div>
            <BsFillCheckCircleFill className="text-green-500 inline" /> Donation
          </div>
          <div>
            <BsFillCheckCircleFill className="text-green-500 inline" /> Donation
          </div>
          <div>
            <BsFillCheckCircleFill className="text-green-500 inline" /> Donation
          </div>
          <div>
            <BsFillCheckCircleFill className="text-green-500 inline" /> Donation
          </div>
          <div>
            <BsFillCheckCircleFill className="text-green-500 inline" /> Donation
          </div>
        </div>
      )}

      <div className="text-center text-[0.8rem]">
        <p className="text-center">Bangladesh islamic center (BIC)</p>
        <div className="flex gap-x-2 justify-center">
          <p>
            <ImMobile className="inline mr-1" />
            0017037781550
          </p>
          <p>
            <FiMail className="inline mr-1" />
            bmmarlington@gmail.com
          </p>
        </div>
        <a className="text-blue-500" href="/">
          https://bicarlington.org
        </a>
        <p>
          2116 S Nelson St 22204 Arlington United States
          <BsFillSendFill className="inline text-blue-500 ml-1 text-lg" />
        </p>
        <p className="text-blue-500">
          <BsWindowPlus className="inline text-white mr-1" />
          support
        </p>
        <img className="w-28 mx-auto mt-3" src={mawaqit_logo} alt="" />
      </div>
    </div>
  );
}
