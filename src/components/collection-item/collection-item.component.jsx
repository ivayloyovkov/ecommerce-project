import React from "react";
import { connect } from "react-redux";

import {
  CollectionItemContainer,
  BackgroundImage,
  AddToCartButton,
  NameContainer,
  PriceContainer,
  CollectionFooterContainer
} from "./collection-item.styles";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage classname="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name} </NameContainer>
        <PriceContainer>${price} </PriceContainer>
      </CollectionFooterContainer>
      <AddToCartButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
