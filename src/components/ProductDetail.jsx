import { useEffect, useState } from "react";

function ProductDetail({productId,onBack,onAddToCart}){
    const [product,setProduct]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        setLoading(true);
        setError(null);
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res=>{
            if(!res.ok) throw new Error('Product not found');
            return res.json();
        })
        .then(data=>{
            setProduct(data);
            setLoading(false);
        })
        .catch(err=>{
            setError(err.message);
            setLoading(false);
        })
    },[productId]);
    if (loading) {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Loading Product Details...</h2>
    </div>
  );
}

if (error || !product) {
  return (
    <div style={{ padding: '40px', textAlign: 'center', color: 'red' }}>
      <h2>Error: {error || "Product not found"}</h2>
      <button onClick={onBack}>Back to Products</button>
    </div>
  );
}
    return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      {/* Back Button */}
      <button
        onClick={onBack}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          background: '#f0f0f0',
          border: '1px solid #ddd',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        ← Back to Products
      </button>
      {/* Product Details */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        background: 'white',
        padding: '30px',
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        {/* Left: Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'contain',
              border: '1px solid #eee',
              borderRadius: '8px',
              padding: '20px'
            }}
          />
        </div>

        {/* Right: Details */}
        <div>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '28px' }}>
            {product.title}
          </h1>

          {/* Category */}
          <p style={{
            display: 'inline-block',
            padding: '5px 15px',
            background: '#f0f0f0',
            borderRadius: '20px',
            fontSize: '14px',
            marginBottom: '20px',
            textTransform: 'capitalize'
          }}>
            {product.category}
          </p>

          {/* Rating */}
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '20px', color: '#ff9900' }}>
              {'★'.repeat(Math.floor(product.rating.rate))}
              {'☆'.repeat(5 - Math.floor(product.rating.rate))}
            </span>
            <span style={{ marginLeft: '10px', fontSize: '16px', color: '#666' }}>
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <div style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#0066cc',
            marginBottom: '20px'
          }}>
            ${product.price}
          </div>

          {/* Description */}
          <div style={{
            marginBottom: '30px',
            lineHeight: '1.6',
            color: '#333'
          }}>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>
              Description
            </h3>
            <p>{product.description}</p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => onAddToCart(product)}
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '18px',
              fontWeight: 'bold',
              background: '#0066cc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#0052a3'}
            onMouseOut={(e) => e.target.style.background = '#0066cc'}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;