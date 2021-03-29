import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager.js'
import { Link } from "react-router-dom";

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
  const [products, setProducts] = useState(first10)

  const [cart, setCart] = useState([])
  
    // console.log(fakeData)
  
  //   const handleAddProduct = (product) => {
  //     // console.log('Product added!')  
  //     // console.log(pd)
  //     const newCart = [...cart, product];
  //     const sameProduct = newCart.filter(pd => pd.key === product.key)
  //     const count = sameProduct.length
  //     product.quantity = count
  //     // console.log(sameProduct)
  //     // console.log(newCart)
  //     setCart(newCart);
  //     addToDatabaseCart(product.key,count)
  // }
  const handleAddProduct = (product) => {
    const tobeAdded = product.key
    const sameProduct = cart.find((pd) => pd.key === tobeAdded)
    let count = 1
    let newCart;

    if (sameProduct) {
      count = sameProduct.quantity + 1
      sameProduct.quantity = count
      const others = cart.filter((pd) => pd.key !== product.key);
      newCart= [...others,product]
    }
    else {
      product.quantity = 1
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, product.quantity);
  };
  
  useEffect(() => {
    const savedCart = getDatabaseCart()
    const productKeys= Object.keys(savedCart)
    const previosCart = productKeys.map(existingKey => {
      const product = fakeData.find(pd => pd.key === existingKey)
      product.quantity = savedCart[existingKey]
      return product
    })
    setCart(previosCart)
  },[])
    return (
      <div className="shop-conatainer">
        <div className="product-container">
          {products.map((pd) => (
            <Product
              key={pd.key}
              showAddToCart={true}
              handleAddProduct={handleAddProduct}
              product={pd}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="main-btn">Review order</button>
            </Link>
          </Cart>
        </div>
      </div>
    );
};

export default Shop;