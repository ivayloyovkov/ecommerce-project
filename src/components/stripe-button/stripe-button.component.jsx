import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_dgY0h7mZGR9lR9F2FiBkm2gX00xiIxUOd4";

    const onToken = token => {
        alert('Payment successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='IY Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;