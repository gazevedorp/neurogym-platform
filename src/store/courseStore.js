import create from 'zustand';
import { persist } from 'zustand/middleware';

const useCourseStore = create(
    persist(
        set => ({
            course: {},
            setCourse: (neuCourse) => set(({
                course: neuCourse
            })),
            removeCourse: () => set(({
                course: {}
            })),
        }),
        {
            name: 'neurogym-course',
            getStorage: () => sessionStorage,
        }
    )
)

export default useCourseStore;