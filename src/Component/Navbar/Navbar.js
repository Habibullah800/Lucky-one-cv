import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <h2>Mega Shop</h2>
            </div>
            <div className='link'>
                <a href='/home'>Home</a>
                <a href='/Menu'>Menu</a>
                <a href='/Log-in'>Log-in</a>
                <a href='/about'>About</a>
            </div>
        </div>
    );
};

export default Navbar;