import React, { useState } from 'react';

function App() {
  const products = [
    { id: 1, name: 'Apple', price: 20 },
    { id: 2, name: 'Banana', price: 10 },
    { id: 3, name: 'Orange', price: 15 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // function to remove cart from index
  const removeCart = (index) => {
    const newCart = cart.filter((_, i) => i != index);
    setCart(newCart);
  };

  //calculate total price of cart
  const totalPrices = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Mini Shoping cart </h1>
      {/* Product List */}
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          {product.name} - ₹{product.price}
          <button
            onClick={() => addToCart(product)}
            style={{ marginLeft: '10px' }}
          >
            Add to Cart
          </button>
        </div>
      ))}
      {/* Cart */}
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
              <button
                onClick={() => removeCart(index)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3> Total Price </h3>
      Total Price : {totalPrices}
    </div>
  );
}

export default App;
