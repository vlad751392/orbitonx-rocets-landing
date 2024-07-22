
import astronaut from '@/assets/png/astronaut.png';

import 'swiper/css';
import 'swiper/css/navigation';


interface ListItem {
    id: number;
    number: number;
    description: string;
}


const List: ListItem[] = [
    {
        id: 0,
        number: 1,
        description:
            "We’ve created the <b>first utility NFT</b> in the degen industry!",
    },
    {
        id: 0,
        number: 2,
        description:
            "NFT Holders earn <b>stable passive income</b> in stable coins!",
    },
    {
        id: 0,
        number: 3,
        description:
            "NFT Holders can earn together with our users, but they also <b>get rakeback from all transactions.</b>",
    },
    {
        id: 0,
        number: 4,
        description:
            "NFT Holders can <b>create and pump their own meme-coins</b> together with our users and get % from every transaction.",
    },
];


export const PlatformPartners = () => {

    return (
        <section className='max-w-[1084px] md:mx-auto mx-7'>
            <h2 className='font-mont font-bold text-pink-regular text-adptive-xl pt-10'>Why NFT Owners are<br />platform partners?</h2>
            <div className='max-w-[785px] flex-col md:flex-row flex mx-auto '>
                <img src={astronaut} className='sm:max-w-[454px] sm:max-h-[518px] ' alt="" />
                <div className='flex gap-10 flex-col justify-center pt-8'>
                    {List.map((item: ListItem) => (
                        <div className='flex gap-4 items-center'>
                            <h3 className='font-lato font-bold text-4xl gradient-text'>{item.number}</h3>
                            <p className='font-lato self-start font-light sm:px-0 px-6' dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>

                    ))}
                </div>
            </div>
            <p className='font-lat font-bol gradient-text pt-7 md:pt-0 text-2xl'>OrbitonX NFT is a profitable asset, NOT just a beautiful image!</p>        
            <p className='font-lat font-light text-2xl py-6'>NFT Holders are early-stage partners with TGE.</p>        
        </section>
    );
};
