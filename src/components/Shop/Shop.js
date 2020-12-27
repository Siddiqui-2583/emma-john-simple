import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css'
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0, 10)
  const [products, setProducts] = useState(first10)
  const [cart,setCart]=useState([])
    // console.log(fakeData)
    const handleAddProduct = (pd) => {
      // console.log('Product added!')  
      // console.log(pd)
      const newCart = [...cart,pd]
      setCart(newCart)
    }
    return (
      <div className="shop-conatainer">
        <div className="product-conatainer">
          {products.map((pd) => (
            <Product handleAddProduct={handleAddProduct} product={pd}></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={ cart}></Cart>
        </div>
      </div>
    );
};

export default Shop;