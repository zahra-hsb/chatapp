"use client"
import { FieldValues, Path, RegisterOptions, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import Card from "../../globals/Card";
import TextInput from "../../globals/TextInput";
import Logo from "../../globals/Logo";
import { FormEventHandler } from "react";
import SubmitButton from "@/components/globals/SubmitButton";
import { LoginFormType } from "@/utils/schemas/types";



const LoginForm = <TFormValues extends FieldValues = FieldValues>({ handleJoinRoom, handleSubmit, register }: {
    handleJoinRoom: (data: {
        room: string;
        userName: string;
    }) => void;
    handleSubmit: (func: (data: LoginFormType) => void) => FormEventHandler<HTMLFormElement> | undefined;
    register: UseFormRegister<TFormValues>
}) => {

    function onSubmit(data: LoginFormType) {
        console.log("data => ", data)
        handleJoinRoom({ room: data.chatRoomTitle, userName: data.username })
    }
    return (
        <Card className="overflow-hidden flex flex-col items-center justify-center gap-5 dark:bg-gray-950! border-2">
            <Logo height={50} width={50} isShowTitle={false} />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <TextInput registerId={"username" as Path<TFormValues>} label="username" id="username" type="text" name="username" required register={register} placeholder="Enter your username..." />
                <TextInput registerId={"chatRoomTitle" as Path<TFormValues>} label="chatroom title" id="chatRoomTitle" name="chatRoomTitle" type="text" required register={register} placeholder="Enter chatroom title" />
                <SubmitButton text="Login" />
            </form>
        </Card>
    )
}

export default LoginForm;