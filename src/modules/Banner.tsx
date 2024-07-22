
import bg from '@/assets/png/banner-bg.png';
import coins from '@/assets/png/coins.png';
import bgMobile from '@/assets/png/banner-bg-mobile.png';
import { Form } from '@/components/Form';
import { useEffect, useState } from 'react';
import { Parallax } from "react-parallax";


export const Banner = () => {
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
        <section className=' relative md:pl-24  mx-auto sm:pt-40 md:mt-16 md:pt-6 2xl:pt-4 pt-48  md:pb-16 lg:pt-12 max-w-[400px] md:max-w-[1084px]'>
           <Parallax
          className="absolute w-[1161px] max-w-[100%] left-0 lg:left-[-50px]"
          bgImage={coins}
          strength={100}    
        >
          </Parallax>
        
            <img src={isMobile ? bgMobile :bg} className='absolute -z-[1] md:px-10 lg:px-0 pb-16 w-[400px] md:w-full top-0 left-0' alt="" />
            <h2 className='text-adptive-xl text-center md:text-left font-mont font-black leading-[1.25] text-[#FF9900]'>1,000,000 USD<br />AIRDROP </h2>
            <p className='text-adptive-l text-center md:text-left font-mont max-w-[568px] py-3 font-semibold'>5% of Collection for Early Adopters and Influencers!</p>
            <Form />
            
        </section>
        
    );
};
