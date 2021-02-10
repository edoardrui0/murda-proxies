import React, { Component } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import headerLogo from "./headerLogo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={headerLogo} alt="Header Logo"></img>
        {/* <DropdownMenu /> */}
      </div>
    );
  }
}

export default Header;
