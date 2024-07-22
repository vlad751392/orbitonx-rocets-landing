import { Logo } from "@/components/Logo";
import { SocialIcons } from "@/components/SocialIcons";
import shine from "@/assets/png/shine.png";

import X from '@/assets/svg/x.svg';
import discord from '@/assets/svg/discord.svg';
import telegram from '@/assets/svg/telegram.svg';

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

export const Header = () => {
  return (
    <header className="flex container flex-col sm:flex-row justify-center sm:justify-between items-center pt-10 sm:px-12">
      <Logo type="header"></Logo>
      <button
          
          className="text-white font-semibold px-8 py-2.5 rounded-lg font-lato"
        >
          Join Now
        </button>
      <img src={shine} className="test" alt="shine" />
      <SocialIcons hidden={false} config={icons} />
    </header>
  );
};
