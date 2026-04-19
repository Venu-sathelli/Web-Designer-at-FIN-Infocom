import './Skeleton.css';

/**
 * Skeleton Loading Component
 * @param {Object} props - Component props
 * @param {string} props.variant - 'text', 'heading', 'card', 'image'
 * @param {string} props.width - Width in px or %
 * @param {string} props.height - Height in px or %
 * @param {string} props.className - Additional classes
 */
export function Skeleton({ variant = 'text', width, height, className = '' }) {
  const classes = `skeleton skeleton-${variant} ${className}`;

  return (
    <div
      className={classes}
      style={{
        width: width || '100%',
        height: height || 'auto',
      }}
      aria-hidden="true"
    />
  );
}

/**
 * Skeleton for cards in the carousel
 */
export function CardSkeleton() {
  return (
    <div className="skeleton-card">
      <Skeleton variant="image" height="200px" />
      <div className="skeleton-card-content">
        <Skeleton variant="heading" width="80%" height="24px" />
        <Skeleton variant="text" width="100%" height="16px" />
        <Skeleton variant="text" width="90%" height="16px" />
      </div>
    </div>
  );
}

/**
 * Skeleton for hero section
 */
export function HeroSkeleton() {
  return (
    <div className="skeleton-hero">
      <Skeleton variant="heading" width="70%" height="60px" />
      <Skeleton variant="text" width="85%" height="20px" />
      <Skeleton variant="text" width="85%" height="20px" />
      <Skeleton variant="text" width="40%" height="48px" />
    </div>
  );
}
