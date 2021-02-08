import React, { Component } from 'react'

export default class cart extends Component {
    render() {
        const {cartItems}= this.props;
        return (
            <div>
                {cartItems.length === 0 ?(<div className="cart cart-header">Cart Is Empty</div>
                ) : (
                <div className="cart cart-header">You Have {cartItems.length}in this cart</div>
                )}
            </div>
        )
    }
}
