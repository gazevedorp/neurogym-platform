import { useState, useEffect, useReducer } from 'react';
import useUserStore from '../../store/userStore';

function HomeStudent() {
    const { user, removeUser } = useUserStore();

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
            <div className='w-full h-min-screen flex justify-center bg-[#DFB367]'>
                <p className='py-60 text-xl text-white font-semibold'>Bem vindo(a), {user.name}.</p>
            </div>
        </div>
    )
}

export default HomeStudent;
