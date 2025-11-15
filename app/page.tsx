import ChatRoom from "@/components/pages/Chat/ChatRoom";
import LoginForm from "@/components/pages/Login/LoginForm";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen">
      {/* <LoginForm /> */}
      <ChatRoom />
    </section>
  );
}
