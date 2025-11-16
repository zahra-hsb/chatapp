"use client"
import ChatRoom from "@/components/pages/Chat/ChatRoom";
import LoginForm from "@/components/pages/Login/LoginForm";
import { socket } from "@/lib/socketClient";
import { useForm } from "react-hook-form";
import { roomStore } from "@/lib/store";
import { useState } from "react";

export default function Home() {

  const { register, handleSubmit } = useForm<{
    username: string;
    chatRoomTitle: string;
  }>();

  // const room = getValues("chatRoomTitle")
  // const userName = getValues("username")
  const [isJoined, setJoined ] = useState(false)
  const [userName, setUserName ] = useState("")
  const [chatRoomTitle, setChatRoomTitle] = useState("")
  // const { } = roomStore()
  function handleJoinRoom(data: {
    room: string;
    userName: string;
  }) {
    console.log("sjkdfhjhf => ", data.room, data.userName)
    if (data.room && data.userName) {
      socket.emit("join-room", {
        room: data.room, username: data.userName
      })
      setUserName(data.userName)
      setJoined(true)
      setChatRoomTitle(data.room)
    }

  }
  return (
    <section className="flex items-center justify-center h-screen">
      {!isJoined ?
        <LoginForm register={register} handleSubmit={handleSubmit} handleJoinRoom={handleJoinRoom} />
        :
        <ChatRoom chatRoomTitle={chatRoomTitle} userName={userName} />
      }
    </section>
  );
}
