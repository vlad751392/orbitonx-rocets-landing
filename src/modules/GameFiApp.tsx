// import { CountdownTimer } from "../../components/Timer/index";
import Phone from "@/assets/png/animated_phone.png";
import Number from "@/assets/svg/number.svg";
import { ScaleAnimation } from "@/components/ScaleAnimation";

export const GameFiApp = () => {
    return (
        <section className="flex flex-col gap-20 items-center max-w-[1084px] justify-center mx-auto">

            <h2 className="font-lato font-black text-[44px] text-pink-regular  pb-8 max-w-[720px] text-center">2,000,000+ users in the Telegram GameFi App</h2>
            <div className="flex flex-col md:flex-row items-center max-w-[665px] md:pl-[52px] gap-4 md:gap-[110px]">
                <img src={Phone} className="h-[355px] w-[162px]" alt="" />
                <div className="text-left font-lato gap-8 pt-3 md:px-0 px-6 flex flex-col items-center">
                    <h3 className="text-2xl md:self-start gradient-text">Trending Telegram DeFi App</h3>
                    <p>OrbitonX is a GameFi platform in the form of a Telegram Miniapp (tApp), where players compete with cryptocurrency portfolios in daily tournaments with large prize pools and earn rewards for accurate market movement predictions.</p>
                    <div className="font-light p-6 md:self-start flex flex-col gap-4 gradient-border justify-center items-center">
                        <p><b>2 000 000+</b> users of web3 game</p>
                        <p><b>1 500 000+</b> Subs in Social media</p>
                    </div>
                </div>
            </div>


        </section>
    );
};
