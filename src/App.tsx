import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import MobileTopbar from "./components/MobileTopbar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import TarabiRaqatCount from "./pages/TarabiRaqatCount";
const prayerApi = {
  fajr: {
    name: "fajr",
    start: "4:46",
    end: "5:15",
  },
  dhuhr: {
    name: "dhuhr",
    start: "1:06",
    end: "1:30",
  },
  asr: {
    name: "asr",
    start: "6:01",
    end: "6:20",
  },
  maghrib: {
    name: "maghrib",
    start: "8:03",
    end: "8:08",
  },
  isha: {
    name: "isha",
    start: "9:26",
    end: "9:45",
  },
};

export default function App() {
  return (
    <main
      className={`bg-image bg-no-repeat bg-cover bg-center h-[120vh] relative`}
    >
      <div className="absolute w-full h-full text-white overflow-hidden sm:overflow-visible">
        <MobileTopbar />
        <Topbar />
        <Routes>
          <Route path="/" element={<Home prayerApi={prayerApi} />} />
          <Route path="/tarabi-counter" element={<TarabiRaqatCount />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}
