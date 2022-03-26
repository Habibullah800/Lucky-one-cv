import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const { pic, Name, Price, ID } = props.product;
    console.log(props.product.pic)
    return (
        <div className='product'>

            <img src={pic} alt=""></img>
            <div className='product-info'>
                <h3>Product name: {Name}</h3>
                <h4>Product ID:- {ID}</h4>
                <h3>Price: ${Price}</h3>
            </div>


        </div>
    );
};

export default Product;