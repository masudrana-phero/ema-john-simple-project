import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {

    const {id,img,name,price,seller,ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <h5>Price: {price}</h5>
                <p>Manufracture: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <div>
                <button 
                onClick={ ()=>handleAddToCart(props.product)} 
                className='cart-btn'>
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Product;