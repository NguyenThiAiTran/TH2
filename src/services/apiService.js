// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Lấy danh sách nhóm
export const getNhom = async () => {
    const response = await axios.get(`${API_URL}/nhom`);
    return response.data;
};

// Lấy danh sách sản phẩm theo nhóm
export const getSanPhamByNhom = async (idnhom) => {
    const response = await axios.get(`${API_URL}/sanpham?nhom=${idnhom}`);
    return response.data;
};

// Lấy chi tiết sản phẩm
export const getSanPhamDetail = async (masp) => {
    const response = await axios.get(`${API_URL}/sanpham/${masp}`);
    return response.data;
};
