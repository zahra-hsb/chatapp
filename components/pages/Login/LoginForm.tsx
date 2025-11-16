"use client"
import { useForm, UseFormRegister } from "react-hook-form";
import Card from "../../globals/Card";
import TextInput from "../../globals/TextInput";
import Logo from "../../globals/Logo";
import Button from "../../globals/Button";
import { Dispatch, FormEventHandler, SetStateAction } from "react";
import SubmitButton from "@/components/globals/SubmitButton";



const LoginForm = ({ handleJoinRoom, setValue, handleSubmit, register }: {
    handleJoinRoom: (data: {
        room: string;
        userName: string;
    }) => void;
    setValue: (name: "chatRoomTitle" | "username", value: string) => void;
    handleSubmit: (func: (data: {
        username: string;
        chatRoomTitle: string;
    }) => void) => FormEventHandler<HTMLFormElement> | undefined;
    register: UseFormRegister<{
        [key: string]: string;
    }>;
}) => {

    function onSubmit(data: {
        username: string;
        chatRoomTitle: string;
    }) {
        console.log("data => ", data)
        handleJoinRoom({ room: data.chatRoomTitle, userName: data.username })
    }
    return (
        <Card className="overflow-hidden flex flex-col items-center justify-center gap-5 dark:bg-gray-950! border-2">
            <Logo height={50} width={50} isShowTitle={false} />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <TextInput label="username" id="username" type="text" name="username" required register={register} placeholder="Enter your username..." />
                <TextInput label="chatroom title" id="chatRoomTitle" name="chatRoomTitle" type="text" required register={register} placeholder="Enter chatroom title" />
                <SubmitButton text="Login" />
            </form>
        </Card>
    )
}

export default LoginForm;