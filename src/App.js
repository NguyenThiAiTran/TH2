// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
    return (
        <Router>
            <div>
                <Menu />
                <Routes>
                    <Route path="/sanpham/nhom/:idnhom" element={<ProductListPage />} />
                    <Route path="/sanpham/:masp" element={<ProductDetailPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
