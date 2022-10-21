import { useState, useEffect } from 'react';

function CourseDetails() {
    return (
        <div className='w-screen h-screen'>
            <div className='border-[14px] sm:border-[20px] border-[#c49546]'>
                <div className='p-6 pt-0 bg-[#c49546]'>
                    <h3 class="text-3xl text-white font-bold text-center">Ginástica Cerebral I</h3>
                </div>
                <iframe className='w-full h-[200px] sm:h-[500px]'
                    src="https://www.youtube.com/embed/lbFGgH94O60?controls=0">
                </iframe>
                <div className='p-4 sm:p-6'>
                    <p className='text-gray-500'><b>Tópico:</b> Introdução</p>
                    <p className='text-gray-500'><b>Professor(a):</b> Gabriela Alves</p>
                    <p className='text-gray-400'><b>Carga horária:</b> 2h</p>
                    <p className='text-xl text-gray-600 font-bold mt-4 mb-2'>Descrição do curso:</p>
                    <p className='text-justify text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis sodales justo. Integer pretium rhoncus urna, ut suscipit quam vestibulum eu. Aenean id augue ut nibh rutrum interdum non ut libero. Vestibulum id porta lacus. Suspendisse potenti. Nam condimentum erat turpis, non luctus velit volutpat at. Maecenas dapibus semper pellentesque. Sed eget convallis ex. Phasellus ultricies nibh non ultricies ultrices. Ut non lectus aliquet erat sagittis volutpat. Nunc mollis pellentesque ligula, ac molestie massa ultricies in.

                        Aliquam erat volutpat. Pellentesque a orci venenatis, elementum urna ut, eleifend libero. Sed fermentum lorem quis hendrerit congue. Donec tempor tortor sit amet dapibus pretium. Donec ut lobortis elit. Nullam et lobortis tortor, sit amet tempus mi. Quisque egestas et justo ac varius. Sed congue nisi eu mattis venenatis. In at sapien risus. Proin vehicula leo felis, vitae auctor mi sagittis at. Nullam neque lorem, venenatis id sollicitudin ut, euismod vel lacus. Fusce id lacinia magna. Aenean finibus ornare ipsum vel lacinia. Mauris aliquam tincidunt pellentesque. Donec pellentesque auctor enim. Etiam dapibus eros metus, eget varius libero blandit vitae.

                        Vestibulum rutrum diam in lorem fermentum ultrices. Suspendisse vulputate et ante non porta. Morbi at arcu ac purus condimentum scelerisque sit amet id nibh. Ut tincidunt vehicula ex, eget cursus sapien finibus ut. Nulla non nulla neque. Morbi lacinia justo feugiat, iaculis ligula non, dapibus metus. Sed pulvinar interdum ullamcorper. Nam euismod bibendum metus, eget molestie turpis volutpat et. Cras venenatis odio vitae nibh tristique posuere. Sed in dolor varius magna lacinia iaculis et vitae eros. Sed vitae cursus augue. Cras tincidunt, felis sed condimentum varius, nisl purus porta tellus, non tincidunt tellus mi ac sem.

                        Curabitur et tincidunt ipsum. Nunc in est nisi. Morbi vel semper augue. Phasellus sed libero id odio vulputate dignissim. Vestibulum et tempus massa. Pellentesque sem justo, luctus vel enim sit amet, vestibulum porttitor ex. Nullam in pretium ligula. Duis in tellus non magna laoreet posuere ac eget quam. Sed magna diam, accumsan sed consequat volutpat, ultrices vulputate dui. Fusce finibus dictum egestas. Duis at urna pellentesque, bibendum felis vulputate, lacinia dolor. Nunc eu eros et magna bibendum posuere nec sed lectus. Duis luctus magna pharetra porta feugiat. Maecenas placerat lorem ut vestibulum ornare.

                        Integer auctor turpis eget urna tincidunt lacinia. Donec quis tortor a diam commodo pellentesque eget in turpis. Cras odio leo, vestibulum ut pharetra at, cursus ut massa. Aliquam erat volutpat. Sed efficitur, nulla vel porttitor tincidunt, sapien lacus venenatis nulla, rhoncus maximus tellus metus eu neque. Morbi pulvinar eros enim, vitae porttitor urna bibendum vitae. Nam faucibus tellus malesuada aliquet interdum. Integer blandit malesuada dui in dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam at lobortis felis, et interdum leo. Mauris sagittis orci ac velit ultrices, eget mattis risus rhoncus.
                    </p></div>
            </div>
        </div>
    )
}

export default CourseDetails;
