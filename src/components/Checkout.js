import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
          alt="Ad jpg"
        />
        <div>
          <h2 className="checkout_title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
};

export default Checkout;
