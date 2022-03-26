import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div>
            <div className='cartInfo'>
                <h2>Cart Details</h2>
                <p>Selected item {cart.length}</p>
            </div>
        </div>
    );
};

export default Cart;