import React from 'react';

const CartItem = (props) => {
    return (
        <div>
            <h5> {props.item.Name}</h5>
        </div>
    );
};

export default CartItem;