import { useState, useEffect } from 'react';

function NotFound() {
    return (
        <section class="bg-white h-screen flex justify-center">
            <div class="py-8 px-4 mx-auto flex h-screen items-center max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto p-20 shadow-2xl rounded-xl max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#BD843E]">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Não encontrado!</p>
                    <p class="mb-4 text-lg font-light text-gray-500">Verifique o endereço acessado e tente novamente.</p>
                    <a href="/" class="inline-flex text-white bg-[#BD843E] font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Voltar para a Pagina Inicial</a>
                </div>
            </div>
        </section>
    )
}

export default NotFound;
