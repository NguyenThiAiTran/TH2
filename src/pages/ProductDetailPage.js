// src/pages/ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSanPhamDetail } from '../services/apiService';

function ProductDetailPage() {
    const { masp } = useParams();
    const [sanpham, setSanpham] = useState(null);

    useEffect(() => {
        const fetchSanPham = async () => {
            try {
                const data = await getSanPhamDetail(masp);
                setSanpham(data);
            } catch (error) {
                console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
            }
        };
        fetchSanPham();
    }, [masp]);

    if (!sanpham) return <p>Loading...</p>;

    return (
        <div>
            <h2>{sanpham.ten}</h2>
            <p>Giá: {sanpham.gia} VND</p>
            <img src={sanpham.hinhanh} alt={sanpham.ten} />
            <p>{sanpham.mota}</p>
        </div>
    );
}

export default ProductDetailPage;
