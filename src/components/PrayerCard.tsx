import { prayerField } from "../../types";

export default function PrayerCard({
  className,
  prayer,
}: {
  className: string;
  prayer: prayerField;
}) {
  return (
    <div
      className={`${className} grid grid-cols-3 sm:grid-cols-1 text-white rounded-xl md:rounded-[1.5rem] py-2 font-medium sm:font-semibold items-center`}
    >
      <h1 className="capitalize sm:text-[2.5vw] ">{prayer.name}</h1>
      <div className="flex gap-x-1  justify-center items-center">
        <div className="sm:text-[3.3vw]">{prayer.start}</div>
        <div className="text-[0.5rem] sm:text-[1.2vw] text-gray-400">
          <p>{prayer.name == "fajr" ? "A" : "P"}</p>
          <p className="-mt-[5px]">M</p>
        </div>
      </div>
      <div className="flex gap-x-1 justify-center items-center">
        <div className="sm:text-[4.2vw]">{prayer.end}</div>
        <div className="text-[0.5rem] sm:text-[1.4vw] text-gray-400">
          <p>{prayer.name == "fajr" ? "A" : "P"}</p>
          <p className="-mt-[5px]">M</p>
        </div>
      </div>
    </div>
  );
}
