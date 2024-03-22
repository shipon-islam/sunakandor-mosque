export default function Jumma() {
  return (
    <div className="grid grid-cols-2 items-center py-2 sm:hidden">
      <div className="justify-self-center">
        <div className="text-center">
          <h1 className="text-md font-medium">Jumua</h1>
        </div>
        <div className="flex gap-x-1 items-center">
          <h1 className="text-[2rem] font-semibold">1:30</h1>
          <div className="text-[0.8rem] text-gray-400">
            <p>P</p>
            <p className="-mt-2">M</p>
          </div>
        </div>
        <hr />
        <div className="flex gap-x-1 items-center justify-center">
          <h1 className="text-2xl font-semibold">1:30</h1>
          <div className="text-[0.7rem] text-gray-400">
            <p>P</p>
            <p className="-mt-2">M</p>
          </div>
        </div>
      </div>
      <div className="justify-self-center ">
        <div>
          <h1 className="text-md font-medium text-center">Shurûq</h1>
        </div>
        <div className="flex gap-x-1 items-center">
          <h1 className="text-[2rem] font-semibold">6:05</h1>
          <div className="text-[0.8rem] text-gray-400">
            <p>A</p>
            <p className="-mt-2">M</p>
          </div>
        </div>
      </div>
    </div>
  );
}
