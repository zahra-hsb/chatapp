"use client"
import TextInput from "@/components/globals/TextInput";
import ChatMessage from "./ChatMessage";
import { useForm } from "react-hook-form";
import { BiSend } from "react-icons/bi";
import Button from "@/components/globals/Button";
import { useEffect, useState } from "react";
import { ChatMsgType } from "@/utils/schemas/types";
import SubmitButton from "@/components/globals/SubmitButton";
import { socket } from "@/lib/socketClient";
import { roomStore } from "@/lib/store";

const ChatRoom = ({ userName, chatRoomTitle }: {
    userName: string;
    chatRoomTitle: string
}) => {
    const { register, handleSubmit, resetField } = useForm<{ textMessage: string }>();
    const [messages, setMessages] = useState<
        { msg: string; username: string }[]
    >([]);
    // const { messages, setMessages, chatRoomTitle } = roomStore()
    useEffect(() => {
        socket.on("message", (data) => {
            console.log('user joined... ', messages)
            setMessages(prev => [...prev, { msg: data.message, username: data.username }]);
        })

        socket.on("user_joined", (message) => {
            console.log('user joined... ', message, messages)
            setMessages(prev => [...prev, { username: "system", msg: message }]);
            // setMessages({ username: "system", msg: message });
        })

        return () => {
            socket.off("user_joined")
            socket.off("message")
        }
    }, [])

    function onSubmit(data: {
        textMessage: string
    }) {
        socket.emit("message", {
            room: chatRoomTitle,
            message: data.textMessage,
            username: userName
        })
        console.log(data)
        setMessages(prev => [...prev, { msg: data.textMessage, username: userName }])
        resetField('textMessage');
    }
    return (
        <section className="w-full h-screen max-w-7xl flex flex-col">
            <div className="p-5 border-b-2 dark:text-white dark:border-b-white flex itema-center justify-between w-full capitalize">
                {chatRoomTitle}
            </div>
            <div className="p-5 flex-1 overflow-y-auto scroll-smooth">
                {messages.length > 0 ?
                    messages.map((msg, index) => (
                        <ChatMessage
                            msg={msg?.msg}
                            username={msg.username}
                            key={index}
                            isOwnMsg={msg?.username === userName}
                            isSystemMsg={msg?.username === "system"}
                        />
                    ))
                    :
                    <div className="w-full h-full flex items-center justify-center ">
                        <p className="bg-gray-400/40 px-2 rounded">No messages here...</p>
                    </div>
                }
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full px-20 flex justify-between items-center border-t-2 py-2 shrink-0">
                <TextInput registerId={"textMessage"} name="textMessage" id="textMessage" register={register} required={false} type="text" className="w-full! border-0!" placeholder="Enter your message here..." />
                <SubmitButton text={<BiSend size={30} />} className="w-12!" />
            </form>
        </section>
    )
}

export default ChatRoom;