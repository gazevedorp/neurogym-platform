import create from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
    persist(
        set => ({
            user: {},
            setUser: (newUser) => set(({
                user: newUser
            })),
            removeUser: () => set(({
                user: {}
            })),
        }),
        {
            name: 'neurogym-student',
            getStorage: () => sessionStorage,
        }
    )
)

export default useUserStore;