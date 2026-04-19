import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Carousel.css';

/**
 * Carousel Component
 * Responsive carousel powered by Swiper with continuous loop and navigation
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of items to display
 * @param {Function} props.renderItem - Function to render each item
 * @param {Object} props.config - Carousel config { mobile, tablet, desktop }
 * @param {boolean} props.showArrows - Whether to show navigation arrows
 * @param {string} props.className - Additional CSS classes
 */
export function Carousel({
  items,
  renderItem,
  config = { mobile: 1, tablet: 2, desktop: 3 },
  showArrows = true,
  className = ''
}) {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleProgress = (swiper) => {
    const progress = (swiper.progress * 100);
    setProgress(progress);
  };

  return (
    <div className={`carousel ${className}`}>
      {/* Progress Bar */}
      <div className="carousel-progress-container">
        <div className="carousel-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2.7}
        // loop={true}
        speed={800}
        onProgress={handleProgress}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 2.7,
            spaceBetween: 24,
          },
        }}
        navigation={showArrows ? {
          prevEl: '.carousel-arrow-prev',
          nextEl: '.carousel-arrow-next',
          disabledClass: 'disabled',
        } : false}
        pagination={false}
        spaceBetween={24}
        className="carousel-swiper"
        centeredSlides={false}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="carousel-item">
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows - Bottom Center */}
      {showArrows && (
        <div className="carousel-controls">
          <button
            className="carousel-arrow carousel-arrow-prev"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            className="carousel-arrow carousel-arrow-next"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
