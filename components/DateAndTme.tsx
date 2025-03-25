'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

const DateAndTime = () => {
    const getTime = () => new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const getDate = () => new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date());

    const [time, setTime] = useState(getTime);
    const [date, setDate] = useState(getDate);

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setTime(getTime)
            setDate(getDate)
        }, 6000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col gap-5 justify-center text-center">  
            <h1 className="text-5xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-xl font-medium text-gray-600 lg:text-2xl">{date}</p>
        </div>
    );
}

export default DateAndTime;