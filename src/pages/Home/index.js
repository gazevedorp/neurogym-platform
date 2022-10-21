import { useState, useEffect } from 'react';
import headerNavLinks from '../../components/HeaderNavLinks'
import MobileNav from '../../components/MobileNav'
import WhatsappButton from '../../components/WhatsappButton';
import useUserStore from '../../store/userStore';

function Home() {
    const { user } = useUserStore();

    return (
        <div>
            <div className="flex bg-white items-center justify-center text-base leading-5">
                <div className="w-full hidden sm:flex flex-row justify-between p-6">
                    <div>
                        {headerNavLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="font-bold hover:underline px-4"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                    {user.id ?
                        <div>
                            <a href="/home-student" className="p-2 font-semibold mr-4 rounded bg-[#BD843E] text-white px-4">
                                Meus cursos
                            </a>
                        </div> :
                        <div>
                            <a href="/login" className="p-2 font-semibold mr-4 rounded bg-[#BD843E] text-white px-4">
                                Entrar
                            </a>
                            <a href="/register" className="p-2 font-semibold mr-4 rounded bg-[#BD843E] text-white px-4">
                                Cadastre-se
                            </a>
                        </div>
                    }

                </div>
                <MobileNav />
            </div>
            <div className='w-full flex bg-[#BD843E] justify-center'>
                <div className='sm:w-4/5 bg-white flex m-8 sm:m-20 shadow-2xl rounded-xl justify-center'>
                    <img
                        className='rounded-lg sm:w-2/5 p-16 transition-transform hover:scale-75'
                        src={require("../../assets/images/logo.png")}
                    />
                </div>
            </div>
            <section id="description" class="bg-white px-8">
                <div class="py-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="max-w-screen-md mb-8 lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">O que é a ginástica cerebral?</h2>
                        <p class="text-gray-500 sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus vulputate pretium. Praesent ac elit facilisis, porttitor justo in, tinci.</p>
                    </div>
                    <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div className='bg-[#BD843E] p-4 rounded-xl shadow hover:scale-110'>
                            <h3 class="mb-2 text-2xl font-bold text-white">Estímulo</h3>
                            <p class="font-light text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus vulputate pretium. Praesent ac elit facilisis, porttitor justo in, tinci.</p>
                        </div>
                        <div className='bg-[#BD843E] p-4 rounded-xl shadow transition-transform hover:scale-110'>
                            <h3 class="mb-2 text-2xl font-bold text-white">Habilidades</h3>
                            <p class="font-light text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus vulputate pretium. Praesent ac elit facilisis, porttitor justo in, tinci.</p>
                        </div>
                        <div className='bg-[#BD843E] p-4 rounded-xl shadow transition-transform hover:scale-110'>
                            <h3 class="mb-2 text-2xl font-bold text-white">Saúde</h3>
                            <p class="font-light text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus vulputate pretium. Praesent ac elit facilisis, porttitor justo in, tinci.</p>
                        </div>
                        <div className='bg-[#BD843E] p-4 rounded-xl shadow transition-transform hover:scale-110'>
                            <h3 class="mb-2 text-2xl font-bold text-white">Sono</h3>
                            <p class="font-light text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus vulputate pretium. Praesent ac elit facilisis, porttitor justo in, tinci.</p>
                        </div>
                        <div className='bg-[#BD843E] p-4 rounded-xl shadow transition-transform hover:scale-110'>
                            <h3 class="mb-2 text-2xl font-bold text-white">Memória</h3>
                            <p class="font-light text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus vulputate pretium. Praesent ac elit facilisis, porttitor justo in, tinci.</p>
                        </div>
                        <div className='bg-[#BD843E] p-4 rounded-xl shadow transition-transform hover:scale-110'>
                            <h3 class="mb-2 text-2xl font-bold text-white">Foco</h3>
                            <p class="font-light text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus vulputate pretium. Praesent ac elit facilisis, porttitor justo in, tinci.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pricing" class="bg-[#BD843E]">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Pacotes disponíveis</h2>
                        <p class="mb-5 font-light text-gray-100 sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus vulputate pretium. Praesent ac elit facilisis, porttitor justo in, tinci.</p>
                    </div>
                    <div class="flex justify-center">
                        <div class="w-[400px] transition-transform hover:scale-110 flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg shadow">
                            <h3 class="mb-4 text-2xl font-semibold">Completo</h3>
                            <p class="font-light text-gray-500 sm:text-lg">Curso completo com todos os beneficios.</p>
                            <div class="flex justify-center items-baseline my-8">
                                <span class="mr-2 text-5xl font-extrabold">R$500</span>
                                <span class="text-gray-500">/10x</span>
                            </div>
                            <ul role="list" class="mb-8 space-y-4 text-left">
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Video aulas</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Material complementar</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Jogos</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Suporte</span>
                                </li>
                            </ul>
                            <a href="/register" class="text-white bg-[#BD843E] focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Comprar</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex justify-center items-center bg-white w-full">
                <p className='text-sm text-center font-bold p-8'>Copyright©2022, <text className='text-[#BD843E]'>NeuroGym Group</text>. Todos os direitos reservados</p>
            </div>
            <WhatsappButton />
        </div>
    )
}

export default Home;
