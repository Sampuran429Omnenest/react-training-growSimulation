import { useCart } from '../context/CartContext';

function Navbar({ onViewCart }) {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav style={{
      background: '#0066cc',
      color: 'white',
      padding: '15px 20px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <h2 style={{ margin: 0, fontSize: '24px' }}>
          🛍️ Shop Online
        </h2>

        {/* Cart Button */}
        <button
          onClick={onViewCart}
          style={{
            padding: '10px 20px',
            background: 'white',
            color: '#0066cc',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          🛒 Cart
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: '#dc3545',
              color: 'white',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
