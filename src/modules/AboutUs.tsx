import igor from '@/assets/webp/Igor.webp';
import denis from '@/assets/webp/Denis.webp';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

interface Person {
  id: number;
  photo: string;
  name: string;
  role: string;
  description: string;
}


const persons : Person[] = [
    {
      id: 1,
      photo: igor,
      name: "Igor",
      role: "Founder",
      description:
        "Tech Entrepreneur, CPO of mobile and SaaS products<br />Ex-founder of a web3-marketplace for in-game items, a gambling platform, and a lootbox service. Raised $3.5M, achieving over $1M+/mo in turnover.",
    },
    {
      id: 2,
      photo: denis,
      name: "Denis",
      role: "Founder",
      description:
        "Partner at L2VC Ex-FUNCORP Top-10 Entertainmentmobile apps in US. More then 100 million downloads, more than 5 million daily active users.<br />100 million $ in ARR.",
    }
  ];


  export const AboutUs = () => {

    return (
      <section>
      <h2 className='font-mont font-bold text-pink-regular text-4xl pb-16 pt-10'>Who we are?</h2>
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
            slidesPerView: 2,
            spaceBetween: 16,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="max-w-[960px] pb-0 sm:pb-16"
      >
        {persons.map((person : Person) => (
          <SwiperSlide className='gap-4 flex flex-col items-center sm:px-6' key={person.id}>
            <img key={person.id} className='max-w-[148px] max-h-[148px]' src={person.photo} alt="Person" />
            <div className='flex'>
              <h3 className='font-mont font-black'>{person.name},&nbsp;</h3>
              <h3 className='font-mont font-black text-[#B07FEE]'>{person.role}</h3>
            </div>
            <p className='font-lato text-[14px] sm:px-0 px-6' dangerouslySetInnerHTML={{ __html: person.description }} />
           </SwiperSlide>
        ))}
      </Swiper>
      </section>
    );
  };
