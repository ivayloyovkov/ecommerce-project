import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/original.svg";

import "./header.component.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="nav-container">
      <Link to="/shop" className="nav-option">
        SHOP
      </Link>
      <Link to="/contact" className="nav-option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="nav-option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="nav-option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
