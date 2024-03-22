import Clock from "./Clock";

export default function ClockMiddle() {
  return (
    <div className="sm:grid grid-cols-[14rem_1fr_14rem] items-center xl:px-16">
      <div className="justify-self-center hidden sm:block">
        <div>
          <h1 className="text-[2.6vw] font-medium">Shurûq</h1>
        </div>
        <div className="flex gap-x-2 items-center">
          <h1 className="text-[3.9vw] font-bold">6:05</h1>
          <div className="font-medium text-[1.6vw]">
            <p>A</p>
            <p className="-mt-2">M</p>
          </div>
        </div>
      </div>
      <Clock />
      <div className="justify-self-center hidden sm:block">
        <div>
          <h1 className="text-[2.6vw] font-medium">Jumua</h1>
        </div>
        <div className="flex gap-x-2 items-center">
          <h1 className="text-[3.9vw] font-bold">1:30</h1>
          <div className="font-medium text-[1.6vw]">
            <p>P</p>
            <p className="-mt-2">M</p>
          </div>
        </div>
        <hr />
        <div className="flex gap-x-2 items-center">
          <h1 className="text-[3.4vw] font-bold">1:30</h1>
          <div className="font-medium text-[1.2vw]">
            <p>P</p>
            <p className="-mt-2">M</p>
          </div>
        </div>
      </div>
    </div>
  );
}
