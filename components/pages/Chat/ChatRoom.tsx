"use client"
import TextInput from "@/components/globals/TextInput";
import ChatMessage from "./ChatMessage";
import { useForm } from "react-hook-form";
import { BiSend } from "react-icons/bi";
import Button from "@/components/globals/Button";
import { useState } from "react";
import { ChatMsgType } from "@/utils/schemas/types";
import SubmitButton from "@/components/globals/SubmitButton";

const ChatRoom = () => {
    const { register, handleSubmit, resetField } = useForm<{ [key: string]: string; }>();
    const [room, setRoom] = useState("")
    const [userName, setUserName] = useState("")
    const [messages, setMessages] = useState<
        { msg: string; username: string }[]
    >([])

    function onSubmit(data: {
        textMessage: string
    }) {
        console.log(data)
        setMessages(prev => [...prev, { msg: data.textMessage, username: userName }])
        resetField('textMessage')
    }
    return (
        <section className="w-full h-screen max-w-7xl flex flex-col">
            <div className="p-5 border-b-2 dark:text-white dark:border-b-white flex itema-center justify-between w-full capitalize">
                {'chatroom name'}
            </div>
            <div className="p-5 flex-1 overflow-y-auto scroll-smooth">
                {messages.length > 0 ?
                    messages.map((msg, index) => (
                        <ChatMessage msg={msg.msg} key={index} isOwnMsg={msg.username === userName} />
                    ))
                    :
                    <div className="w-full h-full flex items-center justify-center ">
                        <p className="bg-gray-400/40 px-2 rounded">No messages here...</p>
                    </div>
                }
                {/* <ChatMessage isOwnMsg isSystemMsg={false} msg="hi" username="zahra" />

                <ChatMessage isOwnMsg={false} isSystemMsg={true} msg="zahra left the group" />
                <ChatMessage isSystemMsg={false} msg="zahra dfgkjhdjfkghkhgfkjhfgkjdhfgjkh djfkhgkjdhfgjkhdfgkjh dkfjghkdjfhgkjhdfg kjdhfgkjhdfkjgh kjhdfgkjhdgf " username="sara" />
                <ChatMessage isOwnMsg isSystemMsg={false} msg="jan" username="zahra" />
                <ChatMessage isSystemMsg={false} msg="zahra dfgkjhdjfkghkhgfkjhfgkjdhfgjkh djfkhgkjdhfgjkhdfgkjh dkfjghkdjfhgkjhdfg kjdhfgkjhdfkjgh kjhdfgkjhdgf " username="sara" />
                <ChatMessage isOwnMsg isSystemMsg={false} msg="jan" username="zahra" />
                <ChatMessage isOwnMsg isSystemMsg={false} msg="jan" username="zahra" />
                <ChatMessage isSystemMsg={false} msg="zahra dfgkjhdjfkghkhgfkjhfgkjdhfgjkh djfkhgkjdhfgjkhdfgkjh dkfjghkdjfhgkjhdfg kjdhfgkjhdfkjgh kjhdfgkjhdgf " username="sara" />
                <ChatMessage isOwnMsg isSystemMsg={false} msg="jan" username="zahra" />
                <ChatMessage isSystemMsg={false} msg="zahra dfgkjhdjfkghkhgfkjhfgkjdhfgjkh djfkhgkjdhfgjkhdfgkjh dkfjghkdjfhgkjhdfg kjdhfgkjhdfkjgh kjhdfgkjhdgf " username="sara" />
                <ChatMessage isOwnMsg isSystemMsg={false} msg="jan" username="zahra" /> */}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full px-20 flex justify-between items-center border-t-2 py-2 shrink-0">
                <TextInput id="textMessage" register={register} required={false} type="text" className="w-full! border-0!" placeholder="Enter your message here..." />
                <SubmitButton text={<BiSend size={30} />} />
            </form>
        </section>
    )
}

export default ChatRoom;