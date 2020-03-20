import React from 'react';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <div className="cart-dropdown-product">
        <img className="cart-dropdown-product-image"></img>
        <div className="cart-dropdown-info">
          <span className="cart-dropdown-product-title">
            Black jean Shearling
          </span>
          <span className="cart-dropdown-"></span>
        </div>
      </div>
    </div>
    <CustomButton>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

export default CartDropdown;