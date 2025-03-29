import React from "react";
// icons
import { RxDesktop, RxPencil2, RxRocket, RxReader, RxArrowTopRight } from "react-icons/rx";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Pagination } from "swiper";

// Service data with exactly 4 unique services
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description:
      "Building responsive and performance websites using modern technologies.",
  },
  {
    icon: <RxPencil2 />,
    title: "UI/UX Design",
    description:
      "Designing modern and intuitive interfaces for an optimal user experience.",
  },
  {
    icon: <RxRocket />,
    title: "Mobile Development",
    description:
      "Developing native and cross-platform mobile applications with innovative solutions.",
  },
  {
    icon: <RxReader />,
    title: "Content Strategy",
    description:
      "Crafting compelling content to drive engagement and build your brand.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      loop={false} // Désactive la duplication automatique des slides
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4, // Sur grand écran, affiche les 4 services sans répéter
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* Icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            {/* Title & Description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* Arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
