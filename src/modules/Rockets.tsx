/// <reference types="vite-plugin-svgr/client" />

import { useEffect, useState } from 'react';
import { Form } from '@/components/Form';
import Solana from '@/assets/svg/solana.svg?react';
import Okx from '@/assets/svg/okx.svg?react';
import Prime from '@/assets/svg/prime.svg?react';

const images = Array.from({ length: 40 }, (_, index) => `/assets/png/rocket${index + 1}.png`);

export const Rockets = () => {
  const [imageIndices, setImageIndices] = useState<number[]>([]);
  const [numRockets, setNumRockets] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setNumRockets(1); // Мобильные устройства
      } else if (width < 1024) {
        setNumRockets(3); // Планшеты
      } else if (width < 1280) {
        setNumRockets(4); // Компьютеры
      } else {
        setNumRockets(5); // Компьютеры
      }
    };

    window.addEventListener('resize', handleResize);

    // Check initial width
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Update image indices based on numRockets
    setImageIndices(Array.from({ length: numRockets }, () => Math.floor(Math.random() * images.length)));

    const interval = setInterval(() => {
      setImageIndices(prevIndices => prevIndices.map(() => Math.floor(Math.random() * images.length)));
    }, 2000);

    return () => clearInterval(interval);
  }, [numRockets]);

  return (
    <section className='relative flex flex-col items-center'>
      <h2 className='md:text-7xl text-pink-regular text-5xl font-mont py-8 font-black text-center'>THE ROCKETS</h2>
      <p className='text-3xl font-mont gradient-text text-center font-light'>
        Ultimate 10,000 NFT-collection with rakeback<br />and passive earnings on OrbitonX platform.
      </p>
      <div className='flex gap-3 items-center pt-8 pb-12'><p>Powered by</p><Solana /></div>
      <div className='flex w-full max-w-[1080px] mx-auto justify-center'>
        {imageIndices.map((index, i) => {
          const randomDuration = `${Math.random() * 2 + 1}s`; // Random duration between 1 and 3 seconds
          return (
            <img
              key={i}
              src={images[index]}
              className='w-[220px] h-[220px] top-0 left-0 rocket'
              style={{ animationDuration: randomDuration }}
              alt={`Rocket ${index + 1}`}
            />
          );
        })}
      </div>

      <h2 className='font-lato text-2xl uppercase pt-8 pb-5'>Don’t Miss The Most Wanted Collection in 2024</h2>

      <Form />
      <p className='pt-8'>Partners with</p>
      <div className='flex gap-3 pt-2'><Okx /><Prime /></div>
    </section>
  );
};
