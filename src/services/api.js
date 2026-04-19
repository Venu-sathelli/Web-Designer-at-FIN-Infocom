import contentData from '../data/content.json';

/**
 * Simulates API delay (1000-1500ms)
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Generates random delay between min and max
 */
const randomDelay = (min = 1000, max = 1500) => {
  return Math.random() * (max - min) + min;
};

/**
 * API service for fetching Grafterr content
 */
const api = {
  /**
   * Fetch navigation data
   * @returns {Promise<Object>} Navigation data
   */
  fetchNavigation: async () => {
    try {
      await delay(randomDelay(800, 1200));
      return { success: true, data: contentData.navigation };
    } catch (error) {
      throw new Error('Failed to fetch navigation');
    }
  },

  /**
   * Fetch hero section content
   * @returns {Promise<Object>} Hero content
   */
  fetchHeroContent: async () => {
    try {
      await delay(randomDelay());
      return { success: true, data: contentData.hero };
    } catch (error) {
      throw new Error('Failed to fetch hero content');
    }
  },

  /**
   * Fetch features section content
   * @returns {Promise<Object>} Features content
   */
  fetchFeaturesContent: async () => {
    try {
      await delay(randomDelay());
      return { success: true, data: contentData.featuresSection };
    } catch (error) {
      throw new Error('Failed to fetch features content');
    }
  },

  /**
   * Fetch all content
   * @returns {Promise<Object>} All content data
   */
  fetchAllContent: async () => {
    try {
      await delay(randomDelay());
      return {
        success: true,
        data: {
          navigation: contentData.navigation,
          hero: contentData.hero,
          featuresSection: contentData.featuresSection
        }
      };
    } catch (error) {
      throw new Error('Failed to fetch content');
    }
  }
};

export default api;
