import './ProductCard.css';

const isExternalUrl = (src) => /^(?:[a-z]+:)?\/\//i.test(src) || src.startsWith('data:');

const resolveAssetPath = (src) => {
  if (!src || isExternalUrl(src)) return src;
  const normalizedPath = src.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
};

/**
 * Product Card Component
 * Displays product information
 * @param {Object} props - Component props
 * @param {string} props.title - Product title
 * @param {string} props.description - Product description
 * @param {string} props.image - Product image URL
 * @param {string} props.icon - Product icon (emoji or SVG)
 */
export function ProductCard({ title, description, image, icon }) {
  const imageSrc = resolveAssetPath(image);

  return (
    <div className="product-card">
        <div className="product-card-content">
        <h3>{title}</h3>
      </div>
      <div className="product-card-image">
        <img src={imageSrc} alt={title} />
      </div>
      
    </div>
  );
}
