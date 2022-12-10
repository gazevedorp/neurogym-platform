import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import useUserStore from '../../store/userStore';
import useCourseStore from '../../store/courseStore';

function Courses() {
    const { removeUser } = useUserStore();
    const { setCourse } = useCourseStore();
    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
        try {
            const response = await api.get("/courses");
            if (response) {
                console.log(response.data);
                setCourses(response.data);
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleExit = () => {
        removeUser();
        window.location.replace('/');
    }

    useEffect(() => {
        getCourses();
    }, [])

    return (
        <div>
            <div className="flex bg-white items-center justify-center text-base leading-5">
                <div className="w-full flex flex-row justify-between p-6">
                    <div className='flex flex-nowrap'>
                        <a
                            key={1}
                            href="/home-student"
                            className="font-bold hover:underline px-4"
                        > Home </a>
                        <a
                            key={1}
                            href="/courses"
                            className="font-bold hover:underline px-4"
                        > Meus cursos </a>
                        <a
                            key={1}
                            className="hidden sm:block font-bold text-gray-300 px-4"
                        > Jogos </a>
                    </div>
                    <div>
                        <a onClick={handleExit} className="cursor-pointer p-2 font-semibold mr-4 rounded bg-[#BD843E] text-white px-4">
                            Sair
                        </a>
                    </div>
                </div>
            </div>
            <div className='w-full h-min-screen bg-[#DFB367]'>
                <div class="p-8 flex justify-between flex-wrap">
                    {courses.map(item =>
                        <div className='mb-8 w-full sm:w-[30%] p-6 bg-white rounded'>
                            <h3 class="text-xl text-black font-semibold mb-2">{item.title}</h3>
                            <p className='text-gray-500'><b>Subtítulo:</b> {item.subtitle}</p>
                            <p className='text-gray-500'><b>Professor(a):</b> {item.teacher}</p>
                            <button
                                onClick={() => {
                                    setCourse(item);
                                    window.location.href = "/course-details";
                                }}
                                className="mt-8 w-full cursor-pointer p-2 font-semibold mr-4 rounded border-2 border-[#BD843E] text-[#BD843E]">
                                Acessar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Courses;
