import Marquee from "react-fast-marquee";

export function ScrollingBanner() {
  const MarqueeItem = () => (
    <>
      <span className="banner-marquee-text inline-flex items-center text-[#7F1911] text-xl font-medium px-4">
        PEDROCOIN
      </span>
      <span className="banner-marquee-text inline-flex items-center text-[#7F1911] text-xl font-medium px-4">
        ×
      </span>
      <span className="banner-marquee-text inline-flex items-center text-[#7F1911] text-xl font-medium px-4">
        AWKWARDLY EPIC
      </span>
      <span className="banner-marquee-text inline-flex items-center text-[#7F1911] text-xl font-medium px-4">
        ×
      </span>
    </>
  );

  return (
    <div className="banner-marquee bg-[#D38A59]  transform rotate-[13deg] scale-110 overflow-hidden whitespace-nowrap h-[94px] flex items-center border-t-2 border-b-2 border-[#7F1911]">
      <Marquee gradient={false} speed={20}>
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
      </Marquee>
    </div>
  );
}
