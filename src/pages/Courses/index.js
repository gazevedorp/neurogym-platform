import { useState, useEffect } from 'react';
import useUserStore from '../../store/userStore';

function Courses() {
    const { removeUser } = useUserStore();

    const handleExit = () => {
        removeUser();
        window.location.replace('/');
    }

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
                    <div className='mb-8 w-full sm:w-[30%] p-6 bg-white rounded'>
                        <h3 class="text-xl text-black font-semibold mb-2">Ginástica Cerebral I</h3>
                        <p className='text-gray-500'><b>Tópico:</b> Introdução</p>
                        <p className='text-gray-500'><b>Professor(a):</b> Gabriela Alves</p>
                        <p className='text-gray-400'><b>Carga horária:</b> 2h</p>
                        <button
                            onClick={() => window.location.href = "/course-details"}
                            className="mt-8 w-full cursor-pointer p-2 font-semibold mr-4 rounded border-2 border-[#BD843E] text-[#BD843E]">
                            Acessar
                        </button>
                    </div>
                    <div className='mb-8 w-full sm:w-[30%] p-6 bg-white rounded'>
                        <h3 class="text-xl text-black font-semibold mb-2">Ginástica Cerebral II</h3>
                        <p className='text-gray-500'><b>Tópico:</b> Básico</p>
                        <p className='text-gray-500'><b>Professor(a):</b> Gabriela Alves</p>
                        <p className='text-gray-400'><b>Carga horária:</b> 20h</p>
                        <button
                            onClick={() => window.location.href = "/course-details"}
                            className="mt-8 w-full cursor-pointer p-2 font-semibold mr-4 rounded border-2 border-[#BD843E] text-[#BD843E]">
                            Acessar
                        </button>
                    </div>
                    <div className='mb-8 w-full sm:w-[30%] p-6 bg-white rounded'>
                        <h3 class="text-xl text-black font-semibold mb-2">Ginástica Cerebral III</h3>
                        <p className='text-gray-500'><b>Tópico:</b> Intermediário</p>
                        <p className='text-gray-500'><b>Professor(a):</b> Gabriela Alves</p>
                        <p className='text-gray-400'><b>Carga horária:</b> 20h</p>
                        <button
                            onClick={() => window.location.href = "/course-details"}
                            className="mt-8 w-full cursor-pointer p-2 font-semibold mr-4 rounded border-2 border-[#BD843E] text-[#BD843E]">
                            Acessar
                        </button>
                    </div>
                    <div className='mb-8 w-full sm:w-[30%] p-6 bg-white rounded'>
                        <h3 class="text-xl text-black font-semibold mb-2">Ginástica Cerebral IV</h3>
                        <p className='text-gray-500'><b>Tópico:</b> Avançado</p>
                        <p className='text-gray-500'><b>Professor(a):</b> Gabriela Alves</p>
                        <p className='text-gray-400'><b>Carga horária:</b> 36h</p>
                        <button
                            onClick={() => window.location.href = "/course-details"}
                            className="mt-8 w-full cursor-pointer p-2 font-semibold mr-4 rounded border-2 border-[#BD843E] text-[#BD843E]">
                            Acessar
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Courses;
