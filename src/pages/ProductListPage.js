// src/pages/ProductListPage.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSanPhamByNhom } from '../services/apiService';

function ProductListPage() {
    const { idnhom } = useParams();
    const [sanphams, setSanphams] = useState([]);

    useEffect(() => {
        const fetchSanPhams = async () => {
            try {
                const data = await getSanPhamByNhom(idnhom);
                setSanphams(data);
            } catch (error) {
                console.error("Lỗi khi lấy sản phẩm:", error);
            }
        };
        fetchSanPhams();
    }, [idnhom]);

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {sanphams.map((sanpham) => (
                    <li key={sanpham.masp}>
                        <Link to={`/sanpham/${sanpham.masp}`}>{sanpham.ten}</Link> - {sanpham.gia} VND
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductListPage;
