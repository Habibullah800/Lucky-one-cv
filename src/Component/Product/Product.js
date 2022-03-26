import React from 'react';
import './Product.css'
const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { pic, Name, Price, ID } = props.product;

    return (
        <div className='product'>
            <img src={pic} alt=""></img>
            <div className='product-info'>
                <h3>Product name: {Name}</h3>
                <h4>Product ID:- {ID}</h4>
                <h3>Price: ${Price}</h3>
            </div>
            <button onClick={() => handleAddToCart(product)}
                className='btn'>
                <p> Add to cart </p>
            </button>
        </div >
    );
};

export default Product;