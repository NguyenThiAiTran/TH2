import React, { useState } from 'react';

function Car() {
    // Khởi tạo state cho thông tin của Car
    const [car, setCar] = useState({
        name: 'Toyota',
        color: 'Red',
        year: 2020
    });

    // Hàm để cập nhật năm của Car
    const updateYear = (event) => {
        setCar({ ...car, year: event.target.value });
    };

    return (
        <>
            <h2>Show information of Car:</h2>
            <p>Tên xe: {car.name}</p>
            <p>Màu xe: {car.color}</p>
            <p>Năm sản xuất: {car.year}</p>
            <label>
                Update Year of Car: 
                <input type="number" onChange={updateYear} />
            </label>
            <input type="button" value="Update Year" onClick={() => alert(`Năm xe đã cập nhật: ${car.year}`)} />
        </>
    );
}

export default Car;
