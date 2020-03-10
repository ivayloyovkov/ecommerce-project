import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/original.svg";

import "./header.component.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="nav-container">
        <Link to='/shop' className='nav-option'>
            SHOP
        </Link>
        <Link to='/contact' className='nav-option'>
            CONTACT
        </Link>
    </div>
  </div>
);

export default Header;