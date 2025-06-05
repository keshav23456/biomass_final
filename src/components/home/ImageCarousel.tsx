import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111721/1_zfe0xv.png',
    title: 'Sustainable Energy Solutions',
    subtitle: 'Powering the future with clean biomass technology'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111713/2_wh5q4j.png',
    title: 'Advanced Biomass Systems',
    subtitle: 'Efficient and environmentally friendly energy production'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111714/3_p4zkh7.png',
    title: 'Industrial Solutions',
    subtitle: 'Custom biomass systems for every industry'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111714/4_vjwfto.png',
    title: 'Research & Innovation',
    subtitle: 'Pushing the boundaries of biomass technology'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111715/5_w53mql.png',
    title: 'Global Impact',
    subtitle: 'Making a difference worldwide'
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111716/6_uzmto2.png',
    title: 'Expert Team',
    subtitle: 'Dedicated professionals at your service'
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111714/7_gjspem.png',
    title: 'Sustainable Future',
    subtitle: 'Building a cleaner world together'
  }
];

const ImageCarousel: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container-custom text-white text-center">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl animate-slide-up">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;