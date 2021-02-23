import React, { Component } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import headerLogo from "./headerLogo.png";
import "./Header.css";
import { BrowserRouter, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img src={headerLogo} alt="Header Logo"></img>
        </Link>
        {/* <DropdownMenu /> */}
      </div>
    );
  }
}

export default Header;
