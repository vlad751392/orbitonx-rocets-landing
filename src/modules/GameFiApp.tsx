// import { CountdownTimer } from "../../components/Timer/index";
import Phone from "@/assets/png/animated_phone.png";
import Number from "@/assets/svg/number.svg";
import { ScaleAnimation } from "@/components/ScaleAnimation";

export const GameFiApp = () => {
  return (
    <section className="flex max-w-[1084px] justify-center mx-auto">
      <div className="flex flex-col ">
        <h2 className="font-lato font-black text-[44px] text-center sm:text-left text-pink-regular pb-8">2,000,000+ users in the Telegram GameFi App</h2>
        <div className="flex max-w-[665px] pl-[52px] gap-[110px]">
        <img src={Phone} className="h-[355px] w-[162px]"  alt="" />
        <div className="text-left font-lato gap-4 flex flex-col items-center">
          <h3>Trending Telegram DeFi App</h3>
          <p>OrbitonX is a GameFi platform in the form of a Telegram Miniapp (tApp), where players compete with cryptocurrency portfolios in daily tournaments with large prize pools and earn rewards for accurate market movement predictions.</p>
        </div>
      </div>
      </div>
      
      
    </section>
  );
};
