"use client"
import { useForm } from "react-hook-form";
import Card from "../../globals/Card";
import TextInput from "../../globals/TextInput";
import Logo from "../../globals/Logo";
import Button from "../../globals/Button";



const LoginForm = ({ handleJoinRoom }: {
    handleJoinRoom: () => void
}) => {
    const { register } = useForm();
    return (
        <Card className="overflow-hidden flex flex-col items-center justify-center gap-5 dark:bg-gray-950! border-2">
            <Logo height={50} width={50} isShowTitle={false} />
            <form className="space-y-5">
                <TextInput label="username" id="username" type="text" required register={register} placeholder="Enter your username..." />
                <TextInput label="chatroom title" id="chatRoomTitle" type="text" required register={register} placeholder="Enter chatroom title" />
                <Button onClick={() => handleJoinRoom()} className="border! border-white!">
                    Login
                </Button>
            </form>
        </Card>
    )
}

export default LoginForm;