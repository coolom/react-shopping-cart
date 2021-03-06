import React, { Component } from "react";
import formatCurrency from "../util";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckout: false,
    };
  }

  render() {
    const cartItems = this.props.cartItems;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className='cart cart-header'>Cart is empty</div>
        ) : (
          <div className='cart cart-header'>
            You have {cartItems.length} items in cart
          </div>
        )}

        <div>
          <div className='cart'>
            <ul className='cart-items'>
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>{item.title}</div>
                  <div className='right'>
                    {formatCurrency(item.price)} x {item.count}
                    <button onClick={() => this.props.removeFromCart(item)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div className='cart'>
              <div className='total'>
                <div>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button
                  className='button primary'
                  onClick={() => this.setState({ showCheckout: true })}>
                  Proceed
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
