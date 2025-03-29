// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'StudentManager',
          path: '/WPF.jpeg',
          link: 'https://github.com/PhoenXHO/WPFStudentManager.git',
        },
        {
          title: 'Pointage system',
          path: '/emp.png',
          link: 'https://github.com/OCP-Interns/OCP-Workflow.git',
        },
        {
          title: 'RoboTech',
          path: '/image.png',
          link: 'https://github.com/Najat1elaissaoui/RoboTech.git',
        },
        {
          title: 'ProdAnalyzer',
          path: '/img.png',
          link: 'https://github.com/Najat1elaissaoui/ProdAnalyzer.git',
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //       link: 'https://github.com/amal/employee-management',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //       link: 'https://github.com/amal/employee-management',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //       link: 'https://github.com/amal/employee-management',
    //     },
    //     {
    //       title: 'title4',
    //       path: '/thumb3.jpg',
    //       link: 'https://github.com/amal/employee-management',
    //     },
    //   ],
    // },
  ],
};





import Image from "next/image";

//import swiper react components
import { Swiper,SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules 
import { Pagination} from 'swiper';

//icons
import {BsArrowRight} from 'react-icons/bs'

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]" // Correction de la classe
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image,imgIndex)=>{
              return <div
              key={imgIndex}
              className="relative rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer"
              onClick={() => window.open(image.link, '_blank')}
            >
                <div className="flex items-center justify-center relative overflow-hidden
               group " >
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt=""/>
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent
                  via-[#e838cc] to-[#4a22bd] opacity-0
                  group-hover:opacity-80 transition-all duration-700"></div>
                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:translate-y-10
                  group-hover:xl:-translate-y-20 transition-all duration-300">
                  <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]
                  ">
                    {/* title part 1 */}
                    <div className="delay-100">LIVE</div>
                    {/* title part 2 */}
                    <div className="translate-y-[500%] group-hover:translate-y-0
                    translate-all duration-300 delay-150">PROJECT</div>
                    {/* icon */}
                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0
                    transition-all duration-300 delay-200"><BsArrowRight/></div>
                  </div>
                  </div>
                </div>
              </div>
            })}
            </div> 
        </SwiperSlide>
      ))}
    </Swiper>
  );
};



export default WorkSlider;
