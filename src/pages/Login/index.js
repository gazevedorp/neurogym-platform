import react, { useState, useEffect } from 'react';
import useUserStore from '../../store/userStore';

function Login() {
    const { setUser } = useUserStore();

    const handleSubmit = e => {
        e.preventDefault();
        setUser({ id: 1, name: "Gabriel" })
        window.location.replace('/home-student');
    }

    return (
        <section>
            <div className="flex flex-col bg-whie items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className='flex justify-center items-center py-8'>
                    <a href='/'>
                        <img width={200} src={require("../../assets/images/logo.png")} />
                    </a>
                </div>
                <div className="w-full shadow-2xl rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-[#BD843E] md:text-2xl">
                            Entre com sua conta
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-[#BD843E]">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="name@email.com" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-[#BD843E]">Senha</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required="" />
                            </div>
                            <a className='text-sm text-gray-500 hover:text-black font-semibold pt-4 underline' href='/register'>Ainda não tenho conta</a>
                            <button type="submit" className="w-full text-white bg-[#BD843E] hover:bg-[#ac7839] hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
