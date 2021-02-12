import React, { Component } from "react";
import "./Purchase.css";

class Purchase extends Component {
  render() {
    return (
      <div className="container" id="purchase">
        <h2>Purchase</h2>
        <select>
          <option value="1gb">1GB / Price</option>
          <option value="1gb">3GB / Price</option>
          <option value="1gb">6GB / Price</option>
          <option value="1gb">10GB / Price</option>
        </select>
        <label>
          Input Coupon Code:
          <input type="text" name="coupon" placeholder="Coupon Code"></input>
        </label>
        {/* coupon code will be hidden for now */}
        <input className="purchaseSubmit" type="submit" value="Buy Now"></input>
      </div>
    );
  }
}

export default Purchase;
