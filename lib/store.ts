import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface RoomStoreType {
    isJoined: boolean,
    setJoined: (isJoined: boolean) => void,

    messages: { msg: string, username: string }[],
    setMessages: (message: { msg: string, username: string }) => void;

    userName: string;
    setUserName: (userName: string) => void;
}

const roomStore = create(
    persist<RoomStoreType>((set) => ({
        isJoined: false,
        setJoined: (isJoined) => set({ isJoined }),

        messages: [],
        setMessages: (message) =>
            set(prev => ({
                messages: [...prev.messages, message]
            })),

        userName: "",
        setUserName: (userName) => set({ userName })
    }), {
        name: 'room-storage',
        storage: createJSONStorage(() => localStorage)
    })
);

export { roomStore }