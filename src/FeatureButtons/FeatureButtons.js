import React, { Component } from "react";
import "./FeatureButtons.css";

class FeatureButtons extends Component {
  render() {
    return (
      <div className="featureButtons">
        <ul>
          <li>What is a proxy</li>
          <li>Features</li>
          <li>Purchase</li>
          <li>Dashboard</li>
        </ul>
      </div>
    );
  }
}

export default FeatureButtons;
