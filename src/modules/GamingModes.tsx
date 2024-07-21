import React, { useState, useEffect } from 'react';
import phone from '@/assets/png/phone_main.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import cn from 'classnames';

interface ListItem {
  id: number;
  photo: string;
  title: string;
  role: string;
  reverse?: boolean;
  description: string;
}

const List: ListItem[] = [
  {
    id: 0,
    photo: phone,
    title: "Competitive mode 💪",
    role: "Founder",
    description:
      "Users join prediction rocket flights, where each rocket has a virtual crypto portfolio. Winner rocket takes the bank in poker wins distributive mod. Rocket NFT owner takes his fair share of rakeback depending on his NFT quality.",
  },
  {
    id: 1,
    photo: phone,
    reverse: true,
    title: "Trading mode 💸",
    role: "Founder",
    description:
      "GameFi memecoin copytrading and sniping mode. Owner creates real memecoin portfolios, users seat in his rocket and fly to the moon together. Memecoin is always a risk, but NFT rocket owner takes his fair share of commission for every flight. Wanna make organized degen trading? That’s your mode.",
  },
  {
    id: 2,
    photo: phone,
    title: "Pumping mode 💥",
    role: "Co-Founder",
    description:
      "NFT Holder can create memecoins, and take your first degenerate passengers on board to the moon easy with automatic pump",
  }
];

export const GamingModes = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Check initial width
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='gaming-modes px-[58px]'>
      <h2 className='font-mont font-black text-pink-regular text-3xl md:text-[44px] pb-12 pt-10'>Our 3 main gaming modes:</h2>
      {isMobile ? (
        <Swiper
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
              width: 1000
            },
          }}
          modules={[Navigation, Autoplay]}
          className="pb-0 sm:pb-16"
        >
          {List.map((item: ListItem) => (
            <SwiperSlide className={cn('gap-4 flex items-center flex-col md:flex-row sm:px-6')} key={item.id}>
              <img className='[150px] h-[328px]' src={item.photo} alt="Phone" />
              <div className='flex flex-col'>
                <h3 className={cn('font-mont text-2xl', 'font-black',)}>
                  {item.title}
                </h3>
                <p className={cn('font-lato font-light px-6')} dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className='flex flex-col items-center'>
          {List.map((item: ListItem) => (
            <div className={cn('flex mb-6 max-w-[708px] gap-16 px-12', { 'flex-row-reverse': item.reverse })} key={item.id}>
              <img className='2-[150px] h-[328px]' src={item.photo} alt="Phone" />
              <div className='flex flex-col pt-24'>
                <h3 className={cn('font-lato text-2xl text-left', 'font-black', { 'text-right': item.reverse })}>
                  {item.title}
                </h3>
                <p className={cn('font-lato font-light text-left pt-4 leading-5', { 'text-right': item.reverse })} dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
              
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
