import React from "react";
import './cart.css';

export const Cart=(Props)=>{
return(
  <div className="product" id="product">
    <div className="product-image" id="product-image">
      <img src={Props.image} alt="this is a phone" />
    </div>
    <div className="product-price" id="product-price">
      {Props.price}
    </div>
    <div className="product-des" id="product-des">
      {Props.desc}
    </div>
    <div className="Buy-button" id="Buy-button">
      <button>Buy Now</button>
    </div>
  </div>
)
}