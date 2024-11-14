import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Route'; // Thêm import cho AppRoutes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppRoutes /> {/* Gọi component AppRoutes */}
    </React.StrictMode>
);
