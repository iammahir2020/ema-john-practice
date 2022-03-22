import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header-nav' >
            <img src={logo} alt="" />
            <div className="header-menu">
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
                <a href="/cart">Cart</a>
            </div>
        </div>
    );
};

export default Header;