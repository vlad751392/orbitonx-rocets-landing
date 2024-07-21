
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
        number: 0,
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
        number: 0,
        description:
            "NFT Holders can earn together with our users, but they also <b>get rakeback from all transactions.</b>",
    },
    {
        id: 0,
        number: 0,
        description:
            "NFT Holders can <b>create and pump their own meme-coins</b> together with our users and get % from every transaction.",
    },
];


export const PlatformPartners = () => {

    return (
        <section className='max-w-[1084px] mx-auto'>
            <h2 className='font-mont font-bold text-pink-regular text-4xl pb-16 pt-10'>Why NFT Owners are platform partners?</h2>
            <div className='max-w-[785px] flex mx-auto'>
                <img src={astronaut} className='w-[349px] h-[398px] ' alt="" />
                <div className='flex flex-col'>
                    {List.map((item: ListItem) => (
                        <div className='flex  items-center'>
                            <h3 className='font-mont font-black text-3xl'>{item.number}</h3>
                            <p className='font-lato font-light sm:px-0 px-6' dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>

                    ))}
                </div>
            </div>

        </section>
    );
};
