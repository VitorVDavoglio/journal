import Button from "@/components/button/Button";
import { COLORS } from "@/style/colors";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center">
      <div className="flex flex-1 flex-col gap-20">
        <h1 
          className="font-bold text-4xl bg-clip-text"
          style={{background: `linear-gradient(to bottom, ${COLORS.brown_teste}, ${COLORS.light_gray})`, WebkitTextFillColor: "transparent",  WebkitBackgroundClip: "text" }}
        >
          Better design for your digital products.
        </h1>
        <p className="font-bold text-2xl">
          Turning your Idea into Reality. We bring together globlal tech industry.
        </p>
        <Button url="portifolio" text="See Our Works" />
      </div>
      <div className="">
        <Image src="/hero.png" width={400} height={400} alt="" className=""/>
      </div>
    </div>
  );
}
