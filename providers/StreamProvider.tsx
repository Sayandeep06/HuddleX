'use client'

import { ReactNode } from "react"
import { useEffect,useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamVideoClient } from "@stream-io/node-sdk";
import Loading from "@/components/Loading";
import { StreamVideo } from "@stream-io/video-react-sdk";
const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

import tokenProvider from "@/actions/stream.actions"; // Adjust based on your project structure

const StreamProvider = ({children}:{
    children: ReactNode
}) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();
    const {user, isLoaded} = useUser();

    useEffect(()=>{
        if(!isLoaded || !user) return;
        if(!API_KEY) throw new Error('Stream API key is missing');

        const client = new StreamVideoClient({
            apiKey: API_KEY,
            //@ts-ignore
            user:{
                id: user?.id,
                //@ts-ignore
                name: user.firstmame || user?.username || 'User',
                image: user?.imageUrl,
            },
            tokenProvider,
        });
        setVideoClient(client);
        return ()=>{
            //@ts-ignore
            client.disconnectUser();
            setVideoClient(undefined);
        };
    },[user, isLoaded])
    if(!videoClient)    return <Loading/>
    return (
        //@ts-ignore
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    )
}

export default StreamProvider
