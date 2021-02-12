import React, { Component } from "react";
import "./Home.css";
import FeatureButtons from "../FeatureButtons/FeatureButtons";
import WhatIsAProxy from "../WhatIsAProxy/WhatIsAProxy";
import Features from "../Features/Features";
import Purchase from "../Purchase/Purchase";

function Home() {
  return (
    <div className="mainContent">
      <div className="content">
        <h1>Murda Proxies</h1>
        <span>Offering fast and reliable sneaker proxies</span>
      </div>
      <FeatureButtons />
      <WhatIsAProxy />
      <Features />
      <Purchase />
    </div>
  );
}

export default Home;
