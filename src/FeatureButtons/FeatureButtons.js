import React from "react";
import "./FeatureButtons.css";

function FeatureButtons() {
  function scrollToSection(id) {
    const element = document.getElementById(id);

    console.log(element);
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="featureButtons">
      <ul>
        <li onClick={() => scrollToSection("what-is-a-proxy")}>
          What is a proxy
        </li>
        <li onClick={() => scrollToSection("features")}>Features</li>
        <li onClick={() => scrollToSection("purchase")}>Purchase</li>
        <li>Dashboard</li>
      </ul>
    </div>
  );
}

export default FeatureButtons;
