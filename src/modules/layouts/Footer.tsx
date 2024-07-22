import { Logo } from "@/components/Logo";
import { SocialIcons } from "@/components/SocialIcons";

import X from '../../assets/svg/x.svg';
import discord from '../../assets/svg/discord.svg';
import telegram from '../../assets/svg/telegram.svg';

// const icons = [
//   {
//     id: 0,
//     icon: instagram,
//     width : 31,
//     height: 29,
//   },
//   {
//     id: 2,
//     icon: facebook,
//     width : 31,
//     height: 29,
//   },
//   {
//     id: 3,
//     icon: youtube,
//     width : 31,
//     height: 29,
//   },
//   {
//     id: 4,
//     icon: tiktok,
//     width : 31,
//     height: 31,
//   },
//   {
//     id: 5,
//     icon: X,
//     width : 20,
//     height: 19,
//   },
// ];

const icons = [
  {
    id: 0,
    icon: telegram,
    width : 22,
    height: 18,
    link: 'https://t.me/orbitonx'
  },
  {
    id: 2,
    icon: discord,
    width : 24,
    height: 18,
    link: 'https://discord.gg/v5p4zVwFHM'
  },
  {
    id: 3,
    icon: X,
    width : 20,
    height: 19,
    link: 'https://twitter.com/orbitonx'
  },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white absolute left-0">
      <section className="flex container justify-between items-center flex-col mx-auto gap-10 pt-20 pb-16">
      <section className="h-14 w-fit flex justify-center md:gap-[45px] mx-auto flex-col \ md:flex-row items-center">
        <Logo type="footer" />
        <div className="h-full bg-[#ffffff] w-px hidden md:block"></div>
        <p className="text-center md:text-left font-lato py-8 text-sm md:text-base">
        OrbitonX - Invest, compete, and have fun with your<br /> community in the Ultimate Portfolio Challenge Game!
        </p>
      </section>
      <p className="font-lato text-sm">
      For investment inquiries, please <a href="mailto:igor@orbitonx.com" className="underline">reach out to us</a>.
      </p>
      <section className="flex md:flex-row flex-col items-center gap-[45px]">
        {/* <p className="underline font-lato text-xs">Privacy policy</p> */}

        <SocialIcons hidden={true} config={icons} />
        <p className="font-lato text-xs">© OrbitonX, all rights reserved.</p>
      </section>
      </section>
    </footer>
  );
};
