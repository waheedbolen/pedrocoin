import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScroillAnimation";
import { fadeUp } from "@/utils/animation-consts";

export default function Pedronomics() {
  const isMobile = useIsMobile();
  const { ref: pedroRef, controls: pedroControls } = useScrollAnimation();

  return (
    <div
      ref={pedroRef}
      className="w-[100%] min-h-[400px] bg-gradient-to-br  flex items-center"
    >
      <div
        className="w-[90%] container mx-auto md:px-6 lg:px-0"
        style={
          {
            width: !isMobile && "90%",
          } as any
        }
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
            !isMobile ? "pb-16" : "pb-28"
          } border-b-2 ${!isMobile ? "border-[#41CE84]" : "border-white"}`}
        >
          <motion.h1
            initial="hidden"
            animate={pedroControls}
            variants={fadeUp}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
            className="text-[#41CE84] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            PEDRONOMICS
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={pedroControls}
            variants={fadeUp}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
            className="text-[#41CE84] text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
          >
            PedroCoin's hybrid tokenomics strategy ensures sustainability,
            transparency, and trust.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
