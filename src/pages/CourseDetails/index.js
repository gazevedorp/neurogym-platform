import { useState, useEffect } from 'react';
import useCourseStore from '../../store/courseStore';

function CourseDetails() {
    const { course } = useCourseStore();

    useEffect(() => {
        console.log(course);
    }, [])

    return (
        <div className='w-screen h-screen'>
            <div className='border-[14px] sm:border-[20px] border-[#c49546]'>
                <div className='p-6 pt-0 bg-[#c49546]'>
                    <h3 class="text-3xl text-white font-bold text-center">{course.title}</h3>
                </div>
                <iframe className='w-full h-[200px] sm:h-[500px]'
                    src="https://www.youtube.com/embed/lbFGgH94O60?controls=0">
                </iframe>
                <div className='p-4 sm:p-6'>
                    <p className='text-gray-500'><b>Subtitulo:</b> {course.subtitle}</p>
                    <p className='text-gray-500'><b>Professor(a):</b> {course.teacher}</p>
                    <p className='text-gray-400'><b>Carga horária:</b> 2h</p>
                    <p className='text-xl text-gray-600 font-bold mt-4 mb-2'>Descrição do curso:</p>
                    <p className='text-justify text-gray-500'>
                        {course.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails;
