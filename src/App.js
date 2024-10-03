import React from 'react';
import { Hello, HelloPerson } from './Hello'; // Sửa ở đây
import { Header } from './Header';
import Car from './Car';
import Login from './Login'; // Thêm dòng này


function App() {
    const studentName = "Nguyễn Thị Ái Trân"; // Thay đổi tên sinh viên tại đây

    return (
        <div>
            <Header />
            <Hello />
            <HelloPerson name={studentName} />
            <Car />
            <Login /> {/* Gọi component Login */}
        </div>
    );
}

export default App;
