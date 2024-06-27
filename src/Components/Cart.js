// src/Components/Cart.js
import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} style={{ width: '100px' }} />
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
