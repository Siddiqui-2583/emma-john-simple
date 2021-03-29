import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link } from "react-router-dom";
import happyImage from '../../images/giphy.gif'

const Review = () => {
  const [cart, setCart] = useState([]);
  const [placedOrder, setPlacedOrder] = useState(false);
  const removeProduct = (productKey) => {
    const newCart = cart.filter(pd => pd.key !== productKey)
    setCart(newCart);
    removeFromDatabaseCart(productKey)
  }
  const handlePlaceOrder = () => {
    setCart([])
    setPlacedOrder(true)
    processOrder()
  }
    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        // const counts = Object.values(savedCart)
        const cartProducts = productKeys.map(key => {
          const product = fakeData.find((pd) => pd.key === key);
          
            product.quantity = savedCart[key]
            // console.log(savedCart[key]);
            return product
        }) 
        // console.log(cartProducts)
        setCart(cartProducts)
    }, [])
    
    return (
      <div className="shop-conatainer">
        <div className="product-container">
          {cart.map((pd) => (
            <ReviewItem
              key={pd.key}
              removeProduct={removeProduct}
              product={pd}
            />
          ))}
        </div>
        {
          placedOrder && <img src={happyImage} alt=""/>
        }
        <div className="cart-container">
          <Cart cart={cart}>
            <Link>
              <button onClick={handlePlaceOrder} className="main-btn">Place Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    );
};

export default Review;