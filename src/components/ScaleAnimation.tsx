import Doge from "@/assets/png/doge.png";



export const ScaleAnimation = () => {
    return (
        <section className="flex justify-center flex-col items-center relative top-[72px] -left-[60px]">
        <img className="z-[1]" src={Doge} alt="" />
        <div className="pulse"></div>
        <div className="pulse2"></div>
        <div></div>
      </section>
    );
}