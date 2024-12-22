import MarqueeBanner from "./MarqueeBanner";

export default function MarqueeOverlay() {
  const bannerText =
    "PEDRO COIN × UNDER CONSTRUCTION × PEDRO COIN × UNDER CONSTRUCTION ×";

  return (
    <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
      <MarqueeBanner />
      {/* <MarqueeBanner text={bannerText} color="[#CD853F]" reverse /> */}
    </div>
  );
}
