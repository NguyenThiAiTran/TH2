import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Import component App
import Login from './Login'; // Import component Login
import { Hello, HelloPerson } from './Hello'; // Nhập chúng như named exports
import Car from './Car'; // Import component Car

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/hello" element={<Hello />} />
                <Route path="/hello-person" element={<HelloPerson name="Nguyễn Thị Ái Trân" />} />
                <Route path="/car" element={<Car />} />
                <Route path="*" element={<h2>Không tìm thấy trang web theo yêu cầu</h2>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
