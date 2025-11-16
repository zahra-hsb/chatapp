import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


const roomStore = create()(
    persist((set) => ({
        isJoined: false,
        setJoined: (isJoined: boolean) => set({ isJoined })
    }), {
        name: 'room-storage',
        storage: createJSONStorage(() => localStorage)
    }))

export { roomStore }