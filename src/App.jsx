import { useState } from 'react';
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  const [currentView, setCurrentView] = useState('products');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const { addToCart } = useCart();

  const handleViewDetails = (productId) => {
    setSelectedProductId(productId);
    setCurrentView('detail');
  };

  const handleBackToProducts = () => {
    setCurrentView('products');
    setSelectedProductId(null);
  };

  const handleViewCart = () => {
    setCurrentView('cart');
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Navbar onViewCart={handleViewCart} />
      
      {currentView === 'products' && (
        <ProductList onViewDetails={handleViewDetails} />
      )}
      
      {currentView === 'detail' && (
        <ProductDetail
          productId={selectedProductId}
          onBack={handleBackToProducts}
          onAddToCart={handleAddToCart}
        />
      )}
      
      {currentView === 'cart' && (
        <Cart onClose={handleBackToProducts} />
      )}
    </div>
  );
}

export default App;
