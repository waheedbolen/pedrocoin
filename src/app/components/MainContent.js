export default function MainContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      <h1
        className="main-title text-[#440C0A] text-6xl md:text-7xl font-bold max-w-2xl leading-tight"
        style={{
          fontFamily: "Manrope",
          fontWeight: "600",
        }}
      >
        Pedrocoin
        <br />
        Building the
        <br />
        Future of Memes
        <br />& Tokens
      </h1>

      <div className="main-content-desc mt-16 max-w-[30rem] sm:float-left lg:float-right">
        <p className="text-[#440C0A] text-[20px] leading-relaxed hidden lg:block">
          Hold tight! Pedrocoin is gearing up to redefine the world of meme
          coins with innovation, trust, and community at its core. We&apos;re
          hard at work crafting something extraordinary for you.
        </p>
        <p className=" main-desc text-[#440C0A] text-xl mt-8 font-medium">
          Stay tuned—great things are on the horizon!
        </p>
      </div>
    </div>
  );
}
