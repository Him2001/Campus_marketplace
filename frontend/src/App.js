import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shopping from './pages/Shopping';
import ItemDetail from './pages/ItemDetail';
import PostItem from './pages/PostItem';
import Navigation from './navigation/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';

const initialProducts = [
  {
    name: 'Used Samsung Smart Phone',
    price: '$150',
    owner: 'John Doe',
    phone: '123-456-7890',
    location: 'Campus A',
    imageUrl: '/images/Phone.jpg', // Ensure correct path
  },
  {
    name: 'Used Mini Heater',
    price: '$70',
    owner: 'Jane Smith',
    phone: '987-654-3210',
    location: 'Campus B',
    imageUrl: '/images/Heater.jpg', // Ensure correct path
  },
  {
    name: 'Used Winter Boots',
    price: '$30',
    owner: 'Alice Brown',
    phone: '555-555-5555',
    location: 'Campus C',
    imageUrl: '/images/Boots.jpg', // Ensure correct path
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const addNewItem = (newItem) => {
    setProducts((prevProducts) => [...prevProducts, newItem]);
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping products={products} setProducts={setProducts} />} />
        <Route path="/product/:id" element={<ItemDetail products={products} />} />
        <Route path="/post-item" element={<PostItem addNewItem={addNewItem} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;