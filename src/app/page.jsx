import { COLORS } from "@/style/colors";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center gap-20">
      <div className="flex-1 flex-row gap-11">
        <h1 
          className="font-bold"
          style={{background: `linear-gradient(to bottom, ${COLORS.brown_teste}, ${COLORS.bg_logout_navbar})`}}
        >
          Better design for your digital products.
        </h1>
        <p className="">
          Turning your Idea into Reality. We bring together globlal tech industry.
        </p>
        <button className=""> See Our Works</button>
      </div>
      <div className="">
        <Image src="/hero.png" width={400} height={400} alt="" className=""/>
      </div>
    </div>
  );
}
