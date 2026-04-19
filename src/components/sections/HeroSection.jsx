import { useContent } from '../../hooks';
import api from '../../services/api';
import { GradientText } from '../ui/GradientText';
import { GradientButton } from '../ui/GradientButton';
import { FloatingShape } from '../ui/FloatingShape';
import { HeroSkeleton } from '../ui/Skeleton';
import './HeroSection.css';

/**
 * Hero Section Component
 */
export function HeroSection() {
  const { data, loading, error, retry } = useContent(api.fetchHeroContent);

  if (loading) {
    return (
      <section className="hero-section">
        <HeroSkeleton />
      </section>
    );
  }

  if (error) {
    return (
      <section className="hero-section">
        <div className="error-state">
          <h2>Unable to load hero section</h2>
          <p>{error}</p>
          <button className="retry-button" onClick={retry}>
            Try Again
          </button>
        </div>
      </section>
    );
  }

  if (!data) return null;

  const { headlinePrefix, headlineGradient, subheadline, cta, decorativeShapes } = data;

  return (
    <section className="hero-section">
      {/* Decorative Shapes */}
      {decorativeShapes && (
        <>
          <FloatingShape
            shape="circle"
            color={decorativeShapes.circle?.color}
            position="top-left"
            size={decorativeShapes.circle?.size || '120px'}
            opacity={0.15}
          />
          <FloatingShape
            shape="rectangle"
            color={decorativeShapes.rectangle?.color}
            position="bottom-right"
            size={decorativeShapes.rectangle?.width || '100px'}
            opacity={0.15}
          />
        </>
      )}

      <div className="container hero-container">
        <div className="hero-content fade-in" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="hero-headline" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            {headlinePrefix}{' '}
            <GradientText as="span">{headlineGradient}</GradientText>
          </h1>
          
          <p className="hero-subheadline" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            {subheadline}
          </p>

          {cta && (
            <GradientButton
              href={cta.href}
              size="lg"
              className="hero-cta"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              {cta.label}
            </GradientButton>
          )}
        </div>
      </div>
    </section>
  );
}
