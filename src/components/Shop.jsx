import React from 'react';
import './Shop.css';

function Shop() {
  const petItems = [
    {
      id: 1,
      name: 'Cat',
      description: 'A cute and furry friend.',
      price: 50,
      image: './src/images/cat.jpeg',
    },
    {
      id: 2,
      name: 'Dog',
      description: 'A loyal and loving companion.',
      price: 100,
      image: './src/images/dog.jpeg',
    },
    {
      id: 3,
      name: 'Rabbit',
      description: 'A chirpy and colorful friend.',
      price: 30,
      image: './src/images/rabbit.jpeg',
    },
    // Add more items as needed
  ];

  return (
    <div className="shop-container">
      <h2>Shop Page</h2>
      <ul className="pet-list">
        {petItems.map(item => (
          <li className="pet-item" key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} width="200" />
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
