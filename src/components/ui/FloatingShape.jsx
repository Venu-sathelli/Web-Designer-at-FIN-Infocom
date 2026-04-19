import './FloatingShape.css';

/**
 * Floating Shape Component
 * Decorative animated shapes
 * @param {Object} props - Component props
 * @param {string} props.shape - Shape type: 'circle' or 'rectangle'
 * @param {string} props.color - Shape color
 * @param {string} props.position - Position: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
 * @param {string} props.size - Size in pixels
 * @param {number} props.opacity - Opacity value (0-1)
 */
export function FloatingShape({ 
  shape = 'circle', 
  color, 
  position = 'top-left',
  size = '100px',
  opacity = 0.15
}) {
  const shapeClass = `floating-shape floating-shape-${shape} floating-shape-${position}`;

  return (
    <div
      className={shapeClass}
      style={{
        backgroundColor: color,
        opacity,
        '--shape-size': size,
      }}
      aria-hidden="true"
    />
  );
}
