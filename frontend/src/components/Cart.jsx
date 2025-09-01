import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Your cart is empty!</div>;
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item._id} style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
          <img src={item.image} alt={item.name} width="80" style={{ borderRadius: '8px' }} />
          <div style={{ marginLeft: '1rem', flex: 1 }}>
            <h4>{item.name}</h4>
            <p>${item.price} x {item.quantity}</p>
          </div>
          <button onClick={() => removeFromCart(item._id)} style={{ padding: '0.5rem 1rem', background: '#e52e71', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart} style={{ padding: '0.7rem 1.5rem', background: '#ff6f61', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', marginTop: '1rem' }}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
