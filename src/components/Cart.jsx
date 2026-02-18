import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

function Cart({ onClose }) {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    getCartTotal 
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h1>Shopping Cart</h1>
          <button
            onClick={onClose}
            style={{
              padding: '10px 20px',
              background: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ← Back to Shopping
          </button>
        </div>

        <div style={{
          padding: '60px',
          textAlign: 'center',
          background: '#f9f9f9',
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🛒</div>
          <h2>Your cart is empty</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Add some products to get started!
          </p>
          <button
            onClick={onClose}
            style={{
              padding: '12px 24px',
              background: '#0066cc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h1>Shopping Cart ({cartItems.length} items)</h1>
        <button
          onClick={onClose}
          style={{
            padding: '10px 20px',
            background: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ← Back to Shopping
        </button>
      </div>

      {/* Cart Items */}
      <div style={{ marginBottom: '20px' }}>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      {/* Cart Summary */}
      <div style={{
        padding: '20px',
        background: '#f9f9f9',
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px'
        }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Total:
          </span>
          <span style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#0066cc'
          }}>
            ${getCartTotal()}
          </span>
        </div>

        <button
          style={{
            width: '100%',
            padding: '15px',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}
          onClick={() => alert('Proceeding to checkout!')}
        >
          Proceed to Checkout
        </button>

        <button
          onClick={clearCart}
          style={{
            width: '100%',
            padding: '10px',
            background: 'white',
            color: '#dc3545',
            border: '1px solid #dc3545',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart