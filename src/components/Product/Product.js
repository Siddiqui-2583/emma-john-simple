import React from 'react';
import './Product.css'
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, seller, price,stock } = props.product;
    // console.log(props)
    return (
      <div className="product">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h3 className="product-name">{name}</h3>
          <br />
          <p>
            <small>By {seller}</small>
          </p>
          <br />
          <p>${price}</p>
          <br />
          <p>
            <small>Only {stock} left in stock - order soon!</small>
          </p>
          <button className="main-btn" onClick={()=> props.handleAddProduct(props.product)}>
            <FontAwesomeIcon icon={faShoppingCart} mask={["far", "circle"]} />
            add to cart
          </button>
        </div>
      </div>
    );
};

export default Product;