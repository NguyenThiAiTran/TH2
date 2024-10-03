import React from 'react'; // Thêm dòng này để sử dụng JSX
function Item(props) {
    return (
        <li>
            <a href={props.link}>{props.content}</a>
        </li>
    );
}
function Menu({ list }) {
    return (
        <ul>
            {list.map((item, index) => (
                <Item key={index} link={item.url} content={item.text} />
            ))}
        </ul>
    );
}
function Header() {
    const list = [
        { url: '/', text: 'Trang chủ' },
        { url: '/login', text: 'Đăng nhập' },
        { url: '/hello', text: 'Xin chào' },
        { url: '/car', text: 'Xe hơi' }
    ];

    return (
        <header>
            <h1>Menu</h1>
            <Menu list={list} />
        </header>
    );
}
export { Item, Menu, Header };
