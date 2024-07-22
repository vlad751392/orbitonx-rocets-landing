import React, { useState, useEffect } from 'react';
import nftCardCommon from '@/assets/png/nft-card-common.png';
import nftCardRare from '@/assets/png/nft_card_rare.png';
import nftCardEpic from '@/assets/png/nft_card_epic.png';
import nftCardLegendary from '@/assets/png/nft_card_legendary.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import cn from 'classnames';

interface ListItem {
    id: number;
    photo: string;
    title: string;
    role: string;
    reverse?: boolean;
    price: string;
    apy: string;
    rakeback: string;
}

const List: ListItem[] = [
    {
        id: 0,
        photo: nftCardCommon,
        title: "Common Collection <span style='color:#F3FF69'>(7,000 NFT)</span>",
        role: "Founder",
        price:
            "from 2 SOL",
        apy:
            "from 200%",
            rakeback:
            "6% from every round",
    },
    {
        id: 1,
        photo: nftCardRare,
        reverse: true,
        title: "Rare Collection <span style='color:#F3FF69'><br />(2,000 NFT)</span>",
        role: "Founder",
        price:
            "from 15 SOL",
        apy:
            "from 300%",
            rakeback:
            "12% from every round",
    },
    {
        id: 2,
        photo: nftCardEpic,
        title: "Epic Collection <span style='color:#F3FF69'><br />(700 NFT)</span>",
        role: "Co-Founder",
        price:
            "from 50 SOL",
        apy:
            "from 400%",
            rakeback:
            "12% from every round",
    },
    {
        id: 3,
        photo: nftCardLegendary,
        title: "Legendary Collection <span style='color:#F3FF69'>(Limited)</span>",
        role: "Co-Founder",
        price:
            "from 200 SOL",
        apy:
            "from 500%",
            rakeback:
            "20% from every round",
    }
];

export const Nft = () => {
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
        <section className='nft max-w-[1084px] mx-auto'>
            <h2 className='font-mont font-black text-pink-regular text-3xl md:text-[44px] pt-10'>Buy NFT become a leader of degen game with degen community!</h2>
            <p className='py-10 text-2xl gradient-text font-lato'>NFTs Properties:</p>
            <Swiper
                modules={[FreeMode, Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                initialSlide={1}
                breakpoints={{
                    0: {
                        slidesPerView: 'auto',
                        spaceBetween: 30,
                        centeredSlides: true,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        freeMode: true
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        freeMode: true
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                className="pb-0 sm:pb-16 "
            >
                {List.map((item: ListItem) => (
                    <SwiperSlide className={cn('flex items-center max-w-[247px] border border-[#7C37D4] rounded-xl h-[345px] flex-col  md:flex-row')} key={item.id}>
                        <img className='w-[247px] h-[343px]' src={item.photo} alt="Nft card" />
                        <div className='flex flex-col absolute w-[246px] px-[16px] pb-[17px] pt-2.5 bottom-0 rounded-xl bg-white-12 backdrop-blur'>
                            <h3 className={cn('font-mont', 'font-black',)} dangerouslySetInnerHTML={{ __html: item.title }} />
                            <div className='flex text-sm pt-2.5'>
                                <p className='font-bold text-right w-[70px] pr-2'>Price</p>
                                <div className='h-6 w-[2px] bg-[#fff]'></div>
                                <p className={cn('font-lato font-light pl-2')} dangerouslySetInnerHTML={{ __html: item.price }} />
                            </div>
                            <div className='flex text-sm'>
                                <p className='font-bold text-right w-[70px] pr-2'>APY</p>
                                <div className='h-6 w-[2px] bg-[#fff]'></div>
                                <p className={cn('font-lato font-light pl-2')} dangerouslySetInnerHTML={{ __html: item.apy }} />
                            </div>
                            <div className='flex text-sm'>
                                <p className='font-bold text-right w-[70px] pr-2'>Rakeback</p>
                                <div className='h-6 w-[2px] bg-[#fff]'></div>
                                <p className={cn('font-lato font-light pl-2')} dangerouslySetInnerHTML={{ __html: item.rakeback }} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
