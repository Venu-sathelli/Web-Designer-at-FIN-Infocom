import { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

/**
 * Custom hook for fetching content with loading and error states
 * @param {Function} fetchFn - API function to call
 * @returns {Object} { data, loading, error, retry }
 */
export const useContent = (fetchFn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      setData(result.data);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [fetchFn]);

  useEffect(() => {
    fetchData();
  }, [fetchFn, fetchData]);

  const retry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, retry };
};

/**
 * Custom hook for carousel logic with responsive behavior
 * @param {number} itemsCount - Total number of items
 * @param {Object} config - Carousel configuration { mobile, tablet, desktop }
 * @returns {Object} Carousel state and handlers
 */
export const useCarousel = (itemsCount, config = { mobile: 1, tablet: 2, desktop: 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(config.desktop);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setItemsPerView(config.mobile);
        setIsMobile(true);
        setIsTablet(false);
      } else if (width < 1024) {
        setItemsPerView(config.tablet);
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setItemsPerView(config.desktop);
        setIsMobile(false);
        setIsTablet(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [config.desktop, config.mobile, config.tablet]);

  const maxIndex = Math.max(0, itemsCount - itemsPerView);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToIndex = useCallback((index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  // Handle touch swipe on mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, goToNext, goToPrev]);

  return {
    currentIndex,
    itemsPerView,
    maxIndex,
    goToNext,
    goToPrev,
    goToIndex,
    handleTouchStart,
    handleTouchEnd,
    isMobile,
    isTablet
  };
};
