import Marquee from "react-fast-marquee";
import mawaqit_logo from "../assets/mawaqit_logo_light_rounded.png";
import store_qrcode from "../assets/store-qrcode.png";

export default function MarqueSlider() {
  return (
    <div className="sm:flex bg-black/40 py-1 fixed bottom-0 hidden ">
      <div>
        <img className="w-[5.5vw]" src={store_qrcode} alt="sd" />
      </div>
      <Marquee speed={80}>
        <h1 className="text-[3vw] font-bold">
          Please visit us at https://bicarlington.org for more details.
        </h1>
      </Marquee>
      <div>
        <img className="w-[12.2vw]" src={mawaqit_logo} alt="sd" />
      </div>
    </div>
  );
}
