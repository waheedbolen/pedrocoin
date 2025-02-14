"use client";
import MarqueeSm from "@/components/marquee-sm";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScroillAnimation";
import { fadeUp, leftToRight, rightToLeft } from "@/utils/animation-consts";
import { Nav } from "@/components/nav";
import Pedronomics from "@/components/pedronomics";
import Roadmap from "@/components/road-map";
import TotalSupply from "@/components/total-supply";
import { ScrollingBanner } from "@/components/scrolling-banner";
import "../styles/globals.css";
import { Button } from "@/components/ui/button";
import { VerticalMetrics } from "@/components/vertical-metrix";
import { WhyPedro } from "@/components/why-pedro";
import Image from "next/image";
import Footer from "@/components/footer";
import MetricsInfo from "@/components/metrix-info";
import useIsMobile from "@/hooks/useIsMobile";
import Link from "next/link";

export default function Home() {
  const isMobile = useIsMobile();

  const { ref: aboutRef, controls: aboutControls } = useScrollAnimation();
  const { ref: barsRef, controls: barsControls } = useScrollAnimation();

  const pedro_gif =
    "https://s3-alpha-sig.figma.com/img/3d71/7fce/044af6f03699e7c1706cc397adf184e7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jkR-zfPVu~8U2r1Sr9qWFR2L-Azf7auTvkoCOJkFbDsaC7M3wNx1sQHviW0~OcXzVjWLiCd76GYOvR1EF~UbpIRuIwD~EcxYxP71lI39m~kylWBcVlK15jkZDGLeE~gv4n5638YORlnADvgTp2-lk43Dsg8PjaL7aa4tKwNYgfNMvt8rQVn8xBu0cVrtFRUT2llMx~XJXTTmxgIWBQzqQcQUAmxQ1y6xf6DZGZn44sEpAm5JXjjBdaiHByqXtylDJvuP0tlbH8g2D3~iaBgcS736ef9wRJJd-15WngiuxHX6nkjZkjHf5-IVc3P9CsVj9RfbqywJFDoNtnMwlOOAUA__";

  return (
    <main className="main-bg min-h-screen bg-gradient-to-b ">
      <div className="mx-auto" style={{ overflow: "hidden" }}>
        <div className="hero-bg h-[100%]">
          <Nav />
          <div className="main-text text-center mx-auto mt-20">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="banner-text text-4xl md:text-7xl font-bold text-white mb-6"
            >
              Building the Future of Memes & Tokens with the
              {isMobile && <br />}
              <span> Awkward Look</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white/90 text-lg md:text-xl mb-8  mx-auto"
            >
              Where humor and innovation unite on the Solana blockchain—join the
              community-driven revolution blending internet culture with
              cutting-edge crypto utility.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={leftToRight}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Link href="https://x.com/pedro_coin61647?s=21" target="_blank">
                <Button className="join-btn bg-[#4A1D1D] text-[#D38A59] hover:bg-[#3A1515] px-8 py-6 text-lg rounded-[100px] border border-[#D38A59]">
                  JOIN THE COMMUNITY
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative bg-[#fff]">
          <ScrollingBanner />
          <div
            ref={aboutRef}
            id="about"
            className="about-container flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 mx-auto"
            style={
              {
                width: !isMobile && "100%",
                padding: !isMobile && "0 2rem",
                marginTop: !isMobile && "-2rem",
              } as any
            }
          >
            <div className="tale-of-perdro-wrapper text-center md:text-left">
              <motion.h2
                initial="hidden"
                animate={aboutControls}
                variants={fadeUp}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className=" text-3xl md:text-5xl font-bold text-[#4A1D1D] mb-6"
                style={
                  {
                    width: !isMobile && "100%",
                    textAlign: !isMobile && "left",
                  } as any
                }
              >
                THE TALE OF PEDRO WHERE MEMES MEET BLOCKCHAIN
              </motion.h2>
              <motion.p
                className="text-[#7F1911] text-lg leading-8 font-light"
                initial="hidden"
                animate={aboutControls}
                variants={leftToRight}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={
                  {
                    textAlign: !isMobile && "left",
                    lineHeight: !isMobile && 1.3,
                  } as any
                }
              >
                PedroCoin isn't just another cryptocurrency—it's a movement!
                Built on the Solana blockchain, PedroCoin merges the universal
                language of memes with groundbreaking blockchain technology. Our
                mission is to make crypto accessible, fun, and impactful for
                everyone, from seasoned investors to meme lovers.
              </motion.p>
            </div>
            <motion.div
              className="pedro-img-wrapper flex justify-center"
              initial="hidden"
              animate="visible"
              variants={rightToLeft}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
              style={
                {
                  zIndex: !isMobile && 2,
                } as any
              }
            >
              <Image
                src={pedro_gif}
                alt="Pedro Meme"
                width={680}
                height={680}
                className="pedro-img-gif rounded-full aspect-square"
              />
            </motion.div>
          </div>
        </div>
        <WhyPedro />
        <div className="pedronomics-container">
          <div className="pedronomics-wrapper">
            <Pedronomics />
            <div
              ref={barsRef}
              className="supply-container relative matrics-container flex items-end justify-center gap-[2rem]"
              style={{
                gap: !isMobile ? 0 : "2rem",
              }}
            >
              <motion.div
                initial="hidden"
                animate={barsControls}
                variants={rightToLeft}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                className="absolute right-[6rem] top-[-3rem]"
              >
                {isMobile && <TotalSupply />}
              </motion.div>
              <div>
                {isMobile && (
                  <motion.div
                    className="matrix-wrapper"
                    initial="hidden"
                    animate={barsControls}
                    variants={rightToLeft}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  >
                    <MetricsInfo
                      title="Liquidity Pool"
                      value="550,000,000 coins"
                      description="Locked liquidity ensures market stability"
                      titleColor="#41CE84"
                      desktop={true}
                      percentage={50}
                    />
                  </motion.div>
                )}
                <motion.div
                  initial="hidden"
                  animate={barsControls}
                  variants={fadeUp}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <VerticalMetrics percentage={50}>
                    <MetricsInfo
                      title="Liquidity Pool"
                      value="550,000,000 coins"
                      description="Locked liquidity ensures market stability"
                      titleColor="#41CE84"
                    />
                  </VerticalMetrics>
                </motion.div>
              </div>
              <div>
                {isMobile && (
                  <motion.div
                    className="matrix-wrapper"
                    initial="hidden"
                    animate={barsControls}
                    variants={rightToLeft}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  >
                    <MetricsInfo
                      title="Ecosystem Utility"
                      value="250,000,000 coins"
                      description="Staking rewards, governance, and transactions"
                      titleColor="#41CE84"
                      desktop={true}
                      percentage={25}
                    />
                  </motion.div>
                )}
                <motion.div
                  initial="hidden"
                  animate={barsControls}
                  variants={fadeUp}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <VerticalMetrics percentage={25}>
                    <MetricsInfo
                      title="Ecosystem Utility"
                      value="250,000,000 coins"
                      description="Staking rewards, governance, and transactions"
                      titleColor="#41CE84"
                    />
                  </VerticalMetrics>
                </motion.div>
              </div>
              <div>
                {isMobile && (
                  <motion.div
                    className="matrix-wrapper"
                    initial="hidden"
                    animate={barsControls}
                    variants={rightToLeft}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                  >
                    <MetricsInfo
                      title="Team & Advisors"
                      value="150,000,000 coins"
                      description="Locked for 12-24 months with gradual vesting"
                      titleColor="#41CE84"
                      desktop={true}
                      percentage={15}
                    />
                  </motion.div>
                )}
                <motion.div
                  initial="hidden"
                  animate={barsControls}
                  variants={fadeUp}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                  <VerticalMetrics percentage={15}>
                    <MetricsInfo
                      title="Team & Advisors"
                      value="150,000,000 coins"
                      description="Locked for 12-24 months with gradual vesting"
                      titleColor="#41CE84"
                    />
                  </VerticalMetrics>
                </motion.div>
              </div>
              <div>
                {isMobile && (
                  <motion.div
                    className="matrix-wrapper"
                    initial="hidden"
                    animate={barsControls}
                    variants={rightToLeft}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                  >
                    <MetricsInfo
                      title="Marketing & Partnerships"
                      value="50,000,000 coins"
                      description="Meme campaigns and strategic collaborations"
                      titleColor="#41CE84"
                      desktop={true}
                      percentage={5}
                    />
                  </motion.div>
                )}
                <motion.div
                  initial="hidden"
                  animate={barsControls}
                  variants={fadeUp}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                >
                  <VerticalMetrics lastChild={true} percentage={5}>
                    <MetricsInfo
                      title="Marketing & Partnerships"
                      value="50,000,000 coins"
                      description="Meme campaigns and strategic collaborations"
                      titleColor="#fff"
                      lastChild={true}
                    />
                  </VerticalMetrics>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <Roadmap />
        <MarqueeSm />
        <Footer />
      </div>
    </main>
  );
}
