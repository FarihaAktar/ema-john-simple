import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const cart = props.cart;
    const total = cart.reduce((total, pd) => total + pd.price, 0);

    let shipping = 0;
    if (total > 0) {
        shipping = 12.00;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 35) {
        shipping = 0
    }
    const tax = (total / 10).toFixed(2)
    const totalOrdered = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision)
    }
    return (
        <div>
            <div className='head'>
                <h2>Order Summary</h2>
                <h3>Items ordered: {cart.length} </h3>
            </div>
            <div className='cart-details'>
                <p>Items:${formatNumber(total)}</p>
                <p>Shipping & Handling: ${shipping}</p>
                <p>Total before tax: ${formatNumber(total + shipping)}</p>
                <p>Estimated Tax: ${tax}</p>
                <h3>Order Total: ${totalOrdered}</h3>
                <button className='btn'>Review Your Order</button>

            </div>
        </div>
    );
};

export default Cart;