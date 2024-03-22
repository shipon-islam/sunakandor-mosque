import Marquee from "react-fast-marquee";
import { PrayerType } from "../../types";
import ClockMiddle from "../components/ClockMiddle";
import Jumma from "../components/Jumma";
import MarqueSlider from "../components/MarqueSlider";
import PrayerCard from "../components/PrayerCard";

export default function Home({ prayerApi }: { prayerApi: PrayerType }) {
  const { fajr, dhuhr, asr, maghrib, isha } = prayerApi;
  return (
    <>
      <ClockMiddle />
      <div className="sm:hidden my-1">
        <Marquee>
          <h1 className="text-sm px-40 font-medium">
            Please visit us at https://bicarlington.org for more details.
          </h1>
        </Marquee>
      </div>
      <div className="sm:grid grid-cols-5 gap-x-10 text-center mx-10 sm:mt-20">
        <PrayerCard className="sm:bg-black/70" prayer={fajr} />
        <PrayerCard className="sm:bg-black/70" prayer={dhuhr} />
        <PrayerCard className="sm:bg-black/70" prayer={asr} />
        <PrayerCard className="sm:bg-black/70" prayer={maghrib} />
        <PrayerCard className="bg-green-900/80" prayer={isha} />
      </div>
      <Jumma />
      <MarqueSlider />
    </>
  );
}
