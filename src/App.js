import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { Hello, HelloPerson } from './Hello'; // Sửa ở đây
import { Header } from './Header';
import Car from './Car';
import Login from './Login'; // Thêm dòng này

function App() {
    const studentName = "Nguyễn Thị Ái Trân"; // Thay đổi tên sinh viên tại đây

    return (
        <Router>
            <div>
                <Menu />
                <Routes>
                    <Route path="/sanpham/nhom/:idnhom" element={<ProductListPage />} />
                    <Route path="/sanpham/:masp" element={<ProductDetailPage />} />
                </Routes>
                <Header />
                <Hello />
                <HelloPerson name={studentName} />
                <Car />
                <Login /> {/* Gọi component Login */}
            </div>
        </Router>
    );
}

export default App;
