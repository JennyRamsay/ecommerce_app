import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from '../components/Product';
import ProductList from '../components/ProductList';
import Basket from '../components/Basket';
import NavBar from '../components/NavBar';
import productsData from '../data/productsData';

const MainContainer = () => {

    const [products] = useState(productsData)


  return (
        
        <Router>
            <NavBar/>
        
                <Routes>
                    <Route 
                        path="/" 
                        element={<ProductList products={products} />} 
                    />
                    <Route path="/products/:id" element={< Product />} />
                    <Route path="/basket" element={< Basket />} />
                </Routes>
        </Router>
  )
}

export default MainContainer;