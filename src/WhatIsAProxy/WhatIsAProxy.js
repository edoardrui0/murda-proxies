import React, { Component } from "react";
import "./WhatIsAProxy.css";

class WhatIsAProxy extends Component {
  render() {
    return (
      <div className="container">
        <h3>What is a Proxy?</h3>
        <div>
          Proxies are servers that are used as an intermediate connection point
          between you and a website. They are essential to botting with multiple
          tasks. They give your tasks a separate ip address from yours to avoid
          your home ip from getting banned. If the site sees too many requests
          from one ip then they will deny access. There are residential (resis)
          and datacenter proxies (dc).
        </div>

        <h3>Residential Proxies</h3>
        <div>
          Residential proxies are proxies that are associated with an internet
          service provider (ISP). This means the site you are botting will see
          each task as a different home address.
        </div>
      </div>
    );
  }
}

export default WhatIsAProxy;
