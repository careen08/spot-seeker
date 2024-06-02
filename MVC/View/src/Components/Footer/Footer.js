import React from "react";
import "./Footer.css";
import { Component } from "react";
import { AiOutlineCopyright } from "react-icons/ai";
class Footer extends Component {
  render() {
    return (
      <div className="menu2">
        <nav className="navigation2">
          <a href="/contactus">Contact Us</a>
          <a href="/aboutus">About</a>
          <p className="copy-rights">
            <AiOutlineCopyright className="copy-icon" />
            2024
          </p>
        </nav>
      </div>
    );
  }
}

export default Footer;
