import Marquee from "react-fast-marquee";
import { IoClose } from "react-icons/io5";
export default function MainContent({ invert = false }) {
  return (
    <div
      className="m-wrapper mx-auto px-4 mt-12 height-[96px] "
      style={{
        width: "220rem",
        margin: "0",
        height: "96px",
        display: "flex",
        color: invert ? "#7F1911" : "#D38A59",
        background: invert ? "#D38A59" : "#7F1911",
        fontSize: "40px",
      }}
    >
      <Marquee
        className=" "
        style={{
          fontFamily: "Manrope",
          fontWeight: "500",
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="flex items-center gap-10">
            <div>PEDRO COIN</div>
            <div className=" text-3xl">
              <IoClose />
            </div>
            <div>UNDER CONSTRUCTION</div>
            <div className="mr-10 text-3xl">
              <IoClose />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
