import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScroillAnimation";
import { fadeUp, leftToRight, rightToLeft } from "@/utils/animation-consts";

export function WhyPedro() {
  const isMobile = useIsMobile();

  const { ref: whyUsRef, controls: whyUsControls } = useScrollAnimation();

  const features = [
    {
      number: "1",
      title: "TRUST",
      description: "Initial LP tokens are burned to prevent rug pulls.",
      image: "/pedro-1.png",
    },
    {
      number: "2",
      title: "GROWTH",
      description:
        "Reserved tokens for staking rewards and ecosystem development.",
      image: "/pedro-2.png",
    },
    {
      number: "3",
      title: "FUN",
      description: "Memes, NFTs, and a thriving community.",
      image: "/pedro-3.png",
    },
  ];

  return (
    <section
      ref={whyUsRef}
      className="why-pedro-container py-24 mx-auto bg-[#fff]"
      style={
        {
          paddingBottom: !isMobile && "1rem",
        } as any
      }
    >
      <div
        className="why-pedro mx-auto text-center mb-24"
        style={
          {
            padding: !isMobile && "0 1rem",
          } as any
        }
      >
        <motion.h2
          initial="hidden"
          animate={whyUsControls}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-[#4A1D1D] mb-6"
          style={
            {
              textAlign: !isMobile && "left",
              lineHeight: !isMobile && 1.3,
            } as any
          }
        >
          WHY PEDROCOIN?
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={whyUsControls}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="text-lg md:text-md text-[#7F1911] font-light"
          style={
            {
              textAlign: !isMobile && "left",
              lineHeight: !isMobile && 1.3,
            } as any
          }
        >
          PedroCoin isn't just another pump.shit coin. It's the quirky,
          community-powered token built on Solana to bring memes and utility
          together for the long haul. 🚀🐒
        </motion.p>
      </div>

      <div className="cards-grid-container gap-6 mx-auto">
        {features.map((feature, index) => (
          <motion.div
            initial="hidden"
            animate={whyUsControls}
            variants={
              index === 0 ? leftToRight : index === 2 ? rightToLeft : fadeUp
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            key={index}
            className="cards-container item relative overflow-hidden rounded-[2.5rem] h-[630px] bg-[#C68B59]"
          >
            {!isMobile && (
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={400}
                className="w-full h-[100%] object-cover absolute inset-0 z-0"
              />
            )}
            {isMobile && (
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={400}
                className="item-img w-full h-[100%] object-cover absolute inset-0"
              />
            )}
            <div className="card-wrapper relative p-8 h-full flex flex-col z-20">
              <div className="num-text w-20 h-20 rounded-full bg-[#4A1D1D] text-white flex items-center justify-center mb-4">
                <span className=" font-bold text-xl">{feature.number}</span>
              </div>
              <div className="mt-auto">
                <h3 className="hov-white text-3xl font-bold mb-3 ">
                  {feature.title}
                </h3>
                <p className=" hov-white text-lg">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
