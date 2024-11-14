// src/components/Menu.js
import React, { useEffect, useState } from 'react';
import { getNhom } from '../services/apiService';
import { Link } from 'react-router-dom';

function Menu() {
    const [nhoms, setNhoms] = useState([]);

    useEffect(() => {
        const fetchNhoms = async () => {
            try {
                const data = await getNhom();
                setNhoms(data);
            } catch (error) {
                console.error("Lỗi khi lấy nhóm:", error);
            }
        };
        fetchNhoms();
    }, []);

    return (
        <div>
            <h2>Danh mục nhóm</h2>
            <ul>
                {nhoms.map((nhom) => (
                    <li key={nhom.idnhom}>
                        <Link to={`/sanpham/nhom/${nhom.idnhom}`}>{nhom.ten}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
