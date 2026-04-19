import './GradientButton.css';

/**
 * Gradient Button Component
 * Button with gradient background
 * @param {Object} props - Component props
 * @param {string} props.children - Button text
 * @param {string} props.onClick - Click handler
 * @param {string} props.href - Link href (if external)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.size - Button size: 'sm', 'md', 'lg'
 */
export function GradientButton({
  children,
  onClick,
  href,
  className = '',
  disabled = false,
  size = 'md',
  ...props
}) {
  const buttonClass = `gradient-button gradient-button-${size} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
