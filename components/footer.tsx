import Image from "next/image";
import Link from "next/link";
import logo from "../public/pedro-logo.png";
import solana from "../public/solana.png";
import x from "../public/x.png";
import t from "../public/t.png";
import Marquee from "react-fast-marquee";
import useIsMobile from "@/hooks/useIsMobile";

export default function Footer() {
  const isMobile = useIsMobile();

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Whitepaper", href: "#" },
  ];

  return (
    <footer className="footer-container pt-12 relative bg-[#440C0A] overflow-hidden">
      {/* Main Content */}
      <div className="footer-container-inner container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-0">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Join the Pedro Party
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Connect with meme lovers and crypto enthusiasts across the globe and
            be part of the awkward revolution
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="https://t.me/+CE_S7E5qupo3Yjc0"
              target="_blank"
              className=" p-3 rounded-full hover:bg-white/90 transition-colors"
            >
              {/* <Send className="w-6 h-6 text-[#8B1D1D]" /> */}
              <Image
                className="footer-img w-24 h-24"
                width={20}
                height={20}
                src={t}
                alt="solana"
              />
            </Link>
            <Link
              href="https://x.com/pedro_coin61647?s=21"
              target="_blank"
              className=" p-3 rounded-full hover:bg-white/90 transition-colors"
            >
              {/* <Twitter className="w-6 h-6 text-[#8B1D1D]" /> */}
              <Image
                className="footer-img w-24 h-24"
                width={20}
                height={20}
                src={x}
                alt="solana"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Background Text Overlay */}
      <div className="footer-marquee-text inset-0 overflow-hidden pointer-events-none mb-20">
        <div className="footer-marquee-text-inner bottom-32 w-full text-[20vw] leading-none font-bold whitespace-nowrap">
          <Marquee gradient={false} speed={30} direction="right">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <span key={index} className="text-[#C1A28B] opacity-90 px-4">
                  ere humor mee
                </span>
              ))}
          </Marquee>
          <Marquee gradient={false} speed={30}>
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <span key={index} className="text-[#41CE84] opacity-90 px-4">
                  on on the Sola
                </span>
              ))}
          </Marquee>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-[90%] mx-auto">
        <div className="container mx-auto px-4 py-6 pb-0">
          <div className="border-b border-white/12 border-[#ffffff97] flex flex-col md:flex-row items-center justify-between gap-4 py-8">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Pedro Logo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>

            {/* Navigation */}
            <nav className="footer-links flex gap-8">
              <Link
                href="#about"
                className="text-white hover:text-white/80 transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="#tokenomics"
                className="text-white hover:text-white/80 transition-colors text-sm"
              >
                Tokenomics
              </Link>
              <Link
                href="#roadmap"
                className="text-white hover:text-white/80 transition-colors text-sm"
              >
                Roadmap
              </Link>

              <a
                className="text-white hover:text-white/80 transition-colors text-sm"
                href="/PC_WP.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whitepaper
              </a>
            </nav>
          </div>
          {/* Copyright */}
          <div
            className="copy-right-text flex justify-center text-[#fff] text-white/60 text-md p-12 text-center"
            style={
              {
                padding: !isMobile && "1rem 0",
              } as any
            }
          >
            © 2025 PedroCoin. Powered by Solana
            {isMobile && (
              <Image
                className="solana-img mx-2"
                width={20}
                height={15}
                src={solana}
                alt="solana"
              />
            )}
            | Meme responsibly. This is not financial advice.
          </div>
        </div>
      </div>
    </footer>
  );
}
