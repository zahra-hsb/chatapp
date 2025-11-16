"use client"
import ChatRoom from "@/components/pages/Chat/ChatRoom";
import LoginForm from "@/components/pages/Login/LoginForm";
import { useState } from "react";

export default function Home() {
  const [joined, setJoined] = useState(false)
  function handleJoinRoom() {
    setJoined(true)
  }
  return (
    <section className="flex items-center justify-center h-screen">
      {/* {!joined ?
        <LoginForm handleJoinRoom={handleJoinRoom} />
        : */}
        <ChatRoom />
      {/* } */}
    </section>
  );
}
