import { useContent } from '../../hooks';
import api from '../../services/api';
import { GradientText } from '../ui/GradientText';
import { ProductCard } from '../ui/ProductCard';
import { Carousel } from '../ui/Carousel';
import { CardSkeleton } from '../ui/Skeleton';
import './FeaturesSection.css';

/**
 * Features Section Component
 * Displays products carousel with features
 */
export function FeaturesSection() {
  const { data, loading, error, retry } = useContent(api.fetchFeaturesContent);

  if (loading) {
    return (
      <section className="features-section">
        <div className="container">
          <div className="features-header-skeleton">
            <div className="skeleton-header" />
            <div className="skeleton-subtitle" />
          </div>
          <div className="features-carousel-skeleton">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="features-section">
        <div className="container">
          <div className="error-state">
            <h2>Unable to load features</h2>
            <p>{error}</p>
            <button className="retry-button" onClick={retry}>
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  const {
    titlePrefix,
    titleGradient,
    titleSuffix,
    subtitle,
    products,
    carousel
  } = data;

  return (
    <section className="features-section">
      <div className="container">
        {/* Section Header */}
        <div className="features-header fade-in" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="features-title" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            {titlePrefix}{' '}
            <GradientText as="span">{titleGradient}</GradientText>
            {titleSuffix && ` ${titleSuffix}`}
          </h2>

          {/* Divider */}
          {/* <div className="features-divider" /> */}

          {subtitle && (
            <p className="features-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              {subtitle}
            </p>
          )}
        </div>

        {/* Products Carousel */}
        {products && products.length > 0 && (
          <Carousel
            items={products}
            renderItem={(product) => (
              <ProductCard
                title={product.title}
                description={product.description}
                image={product.image}
                icon={product.icon}
              />
            )}
            config={carousel?.itemsPerView || { mobile: 1, tablet: 2, desktop: 3 }}
            showArrows={carousel?.showArrows !== false}
            className="features-carousel fade-in"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          />
        )}
      </div>
    </section>
  );
}
