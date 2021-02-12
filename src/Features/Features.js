import React, { Component } from "react";
import "./Features.css";

class Features extends Component {
  render() {
    return (
      <div className="container" id="features">
        <h2>Features</h2>
        <h3>How do resis perform compared to dcs?</h3>
        <span>
          Residential proxies are slower than dcs because they are connected to
          an ISP but, they are a lot safer and less likely to be banned.
        </span>

        <h3>How do I use them for my bot?</h3>
        <span>
          Resis will come in data-plans similar to those of a phone. You have a
          limited amount of data depending on how much you buy. But this means
          you can generate as much as you want until your data-plan runs out.
        </span>

        <button>Buy Now</button>
      </div>
    );
  }
}

export default Features;
