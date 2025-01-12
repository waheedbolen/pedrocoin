import Marquee from "react-fast-marquee";

export default function MarqueeSm() {
  const MarqueeItem = () => (
    <div className="footer-marquee">
      <span className="banner-marquee-text inline-flex items-center text-[#C1A28B] text-xl font-medium px-4">
        PEDROCOIN
      </span>
      <span className=" banner-marquee-text inline-flex items-center text-[#C1A28B] text-xl font-medium px-4">
        ×
      </span>
      <span className="banner-marquee-text inline-flex items-center text-[#C1A28B] text-xl font-medium px-4">
        AWKWARDLY EPIC
      </span>
      <span className="banner-marquee-text inline-flex items-center text-[#C1A28B] text-xl font-medium px-4">
        ×
      </span>
    </div>
  );

  return (
    <div
      className="footer-banner-marquee bg-[#8B1D1D] overflow-hidden whitespace-nowrap h-[94px] flex items-center"
      style={{
        background: "#7F1911",
        color: "#D38A59",
      }}
    >
      <Marquee gradient={false} speed={30}>
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
      </Marquee>
    </div>
  );
}
