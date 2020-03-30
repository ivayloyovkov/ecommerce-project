import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  ItemDetailsText
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <ItemDetailsText>{name}</ItemDetailsText>
      <ItemDetailsText>
        {quantity} x ${price}
      </ItemDetailsText>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
