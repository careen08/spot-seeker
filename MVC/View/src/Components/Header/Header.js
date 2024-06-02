import React from "react";
import { Component } from "react";
import "./Header.css";
import Logo from "./logo.png";
import { FaUser } from "react-icons/fa";
class Header extends Component {
  render() {
    return (
      <div className="menu">
        <a href="/landingpage" className="logo">
          <img src={Logo} alt="Logo" />
        </a>
        <nav className="navigation1">
          <a href="/Explore">Explore</a>
          <a href="/aboutus">About</a>
          <a href="#Language">עבר</a>
          <a href="#" className="profile-icon">
            <FaUser className="user-icon" /> {FaUser}
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;

