import { BsMoonFill } from "react-icons/bs"
import mosqueLogo from "../assets/mosqueLogo.png"

export default function Topbar() {
  return (
    <div className="hidden sm:grid grid-cols-[9rem_1fr_9rem] mt-1 ">
        <div>
        <p className='font-medium text-sm pt-4 pl-3'><span className='w-3 h-3 bg-green-700 inline-block rounded-full mr-1'></span>Online</p>
        </div>
        <div className='flex justify-center gap-x-4 items-center'>
            <img className='w-[3.7vw] h-[3vh] md:h-[5.3vh]' src={mosqueLogo} alt="logo" />
            <h1 className='text-[3.8vw] font-bold'>Baitul Mukarram Masjid</h1>
            <img className='w-[3.7vw] h-[3vh] md:h-[5.3vh]' src={mosqueLogo} alt="logo" />
        </div>
        <div className="flex items-center gap-x-2 relative top-5">
            <BsMoonFill className="text-[2.2vw]"/>
            <div className="text-yellow-400 font-bold flex ">
            <p className="text-[3vw]">66</p>
            <div className="flex -mt-0.5">
            <span className="text-[1.4vw] inline-block ">o</span>
            <p className="text-[2.1vw]">F</p>
            </div>
            </div>
        </div>
    </div>
  )
}
