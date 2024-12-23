// import { Coin } from "lucide-react";
import Image from "next/image";
export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4 pt-8">
      <div className="flex items-center gap-4">
        <div className="logo-wrapper w-[125px] h-[125px] rounded-full bg-white flex items-center justify-center">
          {/* <Coin className="w-8 h-8 text-[#7BC99D]" /> */}
          <Image
            src="/pedro.svg"
            alt="Pedro Logo"
            width="69"
            height="69"
            className="logo w-12 h-12 rounded-full"
            style={{
              width: "69%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </header>
  );
}
