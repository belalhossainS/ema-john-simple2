import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
             <img className="logo" src={logo} alt="" />
             <nav className='belal'>
                 <a href="/shop">shop</a>
                 <a href="/order">Order Review</a>
                 <a href="/manage">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;