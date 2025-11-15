"use client"
import TextInput from "@/components/globals/TextInput";
import ChatMessage from "./ChatMessage";
import { useForm } from "react-hook-form";
import { BiSend } from "react-icons/bi";
import Button from "@/components/globals/Button";

const ChatRoom = () => {
    const { register } = useForm()
    return (
        <section className="w-full h-screen max-w-7xl flex flex-col">
            <div className="p-5 border-b-2 dark:text-white dark:border-b-white flex itema-center justify-between w-full capitalize">
                {'chatroom name'}
            </div>
            <div className="p-5 flex-1 overflow-y-auto scroll-smooth">
                <ChatMessage isOwnMsg isSystemMsg={false} msg="hi" username="zahra" />
                <ChatMessage isOwnMsg={false} isSystemMsg={true} msg="zahra left the group" />
                <ChatMessage isSystemMsg={false} msg="zahra" username="sara" />
                <ChatMessage isOwnMsg isSystemMsg={false} msg="jan" username="zahra" />
                <ChatMessage isSystemMsg={false} msg="zahra" username="sara" />
                <ChatMessage isOwnMsg isSystemMsg={false} msg="jan" username="zahra" />
                <ChatMessage isOwnMsg isSystemMsg={false} msg="jan" username="zahra" />
                <ChatMessage isSystemMsg={false} msg="zahra" username="sara" />
                <ChatMessage isOwnMsg isSystemMsg={false} msg="jan" username="zahra" />
                <ChatMessage isSystemMsg={false} msg="zahra" username="sara" />
                <ChatMessage isOwnMsg isSystemMsg={false} msg="jan" username="zahra" />
            </div>
            <div className="w-full px-20 flex justify-between items-center border-t-2 py-2 shrink-0">
                <TextInput id="textMessage" register={register} required={false} type="text" className="w-full! border-0!" placeholder="Enter your message here..." />
                <Button onClick={() => {}} className="w-10! items-center! justify-center! mt-0!">
                    <BiSend size={30} />
                </Button>
            </div>
        </section>
    )
}

export default ChatRoom;