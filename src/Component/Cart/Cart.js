import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div>
            <div className='cartInfo'>
                <h2>Cart Details</h2>
                <p>Selected item {cart.length}</p>
                {
                    cart.map(item => <CartItem
                        key={item.Price}
                        item={item.Name}
                    ></CartItem>
                    )
                }
                <button className='remove-btn'>
                    <a href='/home'> Remove All</a>
                </button>
            </div>
        </div>
    );
};

export default Cart;