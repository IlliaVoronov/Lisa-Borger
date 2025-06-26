import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ 
  images = [], 
  autoplay = true, 
  showNavigation = true, 
  showPagination = true,
  onImageClick = null,
  className = ""
}) => {
  // eslint-disable-next-line no-unused-vars
  const [swiper, setSwiper] = useState(null);

  // Default fallback images if none provided
  const defaultImages = [
    { id: 1, src: '2005_exhibition/wall_1/barreerreef008.jpg', alt: 'Barrier Reef' },
    { id: 2, src: '2005_exhibition/wall_1/freespirit004.jpg', alt: 'Free Spirit' },
    { id: 3, src: '2005_exhibition/wall_1/frienlypelican002.jpg', alt: 'Friendly Pelican' },
    { id: 4, src: '2005_exhibition/wall_1/rebland001.jpg', alt: 'Rebland' },
    { id: 5, src: '2005_exhibition/wall_1/stimmungen005.jpg', alt: 'Stimmungen' },
    { id: 6, src: '2005_exhibition/wall_1/waratah009.jpg', alt: 'Waratah' },
  ];

  const imagesToShow = images.length > 0 ? images : defaultImages;

  const handleImageClick = (image, index) => {
    if (onImageClick) {
      onImageClick(image, index);
    }
  };

  return (
    <div className={`w-full max-w-full sm:max-w-[60%] md:max-w-[60%] lg:max-w-[60%] xl:max-w-[60%] mx-auto m-2  bg-white rounded-lg ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        navigation={showNavigation ? {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        } : false}
        pagination={showPagination ? { clickable: true } : false}
        autoplay={autoplay ? { delay: 1500, disableOnInteraction: false } : false}
        loop
        onSwiper={setSwiper}
        className="w-full h-[70vh] rounded-lg"
        role="region"
        aria-label="Image Carousel"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
        }}
      >
        {imagesToShow.map((image, index) => (
          <SwiperSlide key={image.id} className="flex items-center justify-center bg-white w-full h-full">
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full max-h-full object-contain p-1 sm:p-2 md:p-4 lg:p-6 xl:p-7 ${onImageClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
              loading="lazy"
              onClick={() => handleImageClick(image, index)}
              onError={(e) => (e.target.src = '/fallback.jpg')}
            />
          </SwiperSlide>
        ))}
        
        {/* Custom navigation buttons */}
        {showNavigation && (
          <>
            <div className="swiper-button-prev hidden sm:block !w-8 !h-8 after:!text-sm !text-blue-500 hover:!text-blue-700 !left-[-8px]"></div>
            <div className="swiper-button-next hidden sm:block !w-8 !h-8 after:!text-sm !text-blue-500 hover:!text-blue-700 !right-[-8px]"></div>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default Carousel;