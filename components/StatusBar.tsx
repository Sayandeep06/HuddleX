"use client"
import DateAndTime from "./DateAndTme";
import Image from "next/image";
const StatusBar = ()=>{
    return (
        <section className="flex flex-col gap-4 p-5">
            <DateAndTime/>
            <Image
                src='/bluezoom.jpg'
                height={400}
                width={400}
                alt="Video Call"
                className=""
            />
        </section>
    )
}

export default StatusBar;