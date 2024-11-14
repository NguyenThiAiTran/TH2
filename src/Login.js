import React, { useState } from 'react';

function Login() {
    // Tạo state để lưu giá trị đăng nhập
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Hàm xử lý khi người dùng nhấn nút Đăng nhập
    const handleLogin = () => {
        console.log("Username:", username);  // Ghi tên đăng nhập ra console
        console.log("Password:", password);  // Ghi mật khẩu ra console
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
            <label>
                Tên đăng nhập:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}  // Cập nhật state khi nhập liệu
                />
            </label>
            <br />
            <label>
                Mật khẩu:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  // Cập nhật state khi nhập liệu
                />
            </label>
            <br />
            <input
                type="button"
                value="Đăng nhập"
                onClick={handleLogin}  // Gọi hàm khi nhấn nút
            />
        </div>
    );
}

export default Login;
