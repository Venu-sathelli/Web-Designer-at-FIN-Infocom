import './GradientText.css';

/**
 * Gradient Text Component
 * Displays text with gradient color
 * @param {Object} props - Component props
 * @param {string} props.children - Text content
 * @param {string} props.as - HTML tag (h1, h2, h3, etc.)
 * @param {string} props.className - Additional CSS classes
 */
export function GradientText({ children, as = 'span', className = '' }) {
  const Tag = as;
  
  return (
    <Tag className={`gradient-text ${className}`}>
      {children}
    </Tag>
  );
}
