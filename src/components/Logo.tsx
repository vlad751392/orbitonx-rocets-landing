import { FC } from "react";
import header_logo from "@/assets/svg/header_logo.svg";
import footer_logo from "@/assets/svg/footer_logo.svg";

import cn from "classnames";

interface Props {
  type: 'header' | 'footer';
}

export const Logo : FC<Props> = ({ type }) => {
  return (
    <section className="w-fit flex items-center gap-3">
      <img src={type === 'header' ? header_logo : footer_logo} alt="" className={cn(
          'w-[50px]',
          {
            'h-[50px]': type === 'header',
            'h-[58px]': type === 'footer'
          }
        )}/>  
      <p className="font-neue font-extrabold text-2xl text-white tracking-wide">OrbitonX</p>
    </section>
  );
};
