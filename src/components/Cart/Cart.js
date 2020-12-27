import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart)
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        let product = cart[i]
        total = total + product.price       
    }
    let shippingCost = 12.99
    if (total > 100)
        shippingCost = 0
    else if (total > 50)
        shippingCost = 4.99
    
    let tax = (total / 10).toFixed(2)
    
    return (
      <div>
        <h4>Order summary</h4>
        <h5>Items ordered: {cart.length}</h5>
        <p>Shipping cost: {shippingCost} </p>
        <p>
          <small>Tax + vat: {tax}</small>
        </p>
        <h4>Total: {(total + shippingCost + Number(tax)).toFixed(2)}</h4>
      </div>
    );
};

export default Cart;