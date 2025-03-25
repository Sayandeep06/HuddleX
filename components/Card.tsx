"use client"
import Image from "next/image";
interface CardProps {
    bgColor: string;
    hoverColor: string;
    img: string;
    title: string;
    handleClick?: ()=>null
}

const Card = ({bgColor, hoverColor, img, title, handleClick}:CardProps) => {
    return (
        <section
            className={`${bgColor} ${hoverColor} p-10 flex flex-col gap-5 items-center rounded-3xl cursor-pointer transition delay-75 duration-700 ease-in-out hover:-translate-y-1 scale-90 hover:scale-101 shadow-2xl`}
             onClick={handleClick}
        >
          <div >
            <Image src={img} alt="meeting" width={70} height={70} />
          </div>
          
          <div className="">
            <h1 className="text-md text-white font-black">{title}</h1>
          </div>
        </section>
    );
}

export default Card
