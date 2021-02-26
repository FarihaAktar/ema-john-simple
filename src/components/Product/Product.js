import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { product, handleAddProduct } = props;
    const { name, img, price, seller, stock } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-details">
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock- order soon</small></p>
                <button onClick={() => handleAddProduct(product)} className='btn'> <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;