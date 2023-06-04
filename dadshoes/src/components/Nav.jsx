import React, { useState } from "react";
import styles from "./Nav.module.scss";

function Nav({ itemsInCart, removeItem, payForItems, emptyCart }) {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const handleOpenCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const addItemToCart = () => {
    setCartItems(cartItems + 1);
  };

  const removeItemFromCart = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.infoContainer}>
        <ul>
          <li>
            <h2> Sneakers </h2>
          </li>
          <li className={styles.hovers}>
            <a href="#">Collections</a>
          </li>
          <li className={styles.hovers}>
            <a href="#">Men</a>
          </li>
          <li className={styles.hovers}>
            <a href="#">Women</a>
          </li>
          <li className={styles.hovers}>
            <a href="#">About</a>
          </li>
          <li className={styles.hovers}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.side} onClick={handleOpenCart}>
        <ul>
          <li>
            <span className={styles.counter}>{cartItems}</span>
            <p className={styles.amount}>
              <img className={styles.icon} src="./navbilder/Shape.png" alt="Cart Icon" />
            </p>
          </li>
          <li>
            <p>
              <img className={styles.pic} src="./navbilder/Oval.png" alt="User Icon" />
            </p>
          </li>
        </ul>
        {isCartOpen && (
          <div className={styles.wrapper}>
            <h3 className={styles.cart}>Cart</h3>
            <div className={styles.item}>
              {cartItems > 0 && (
                <div>
                  <div className={styles.all}>
                    <h4>
                      <img src="./navbilder/Rectangle.png" alt="Product Image" />
                    </h4>
                    <div className={styles.written}>
                      <p className={styles.hed}>Fall Limited Edition Sneakers</p>
                      <p className={styles.hed}>
                        $125.00 x {cartItems} <span className={styles.count}>${payForItems}</span>
                      </p>
                    </div>
                    <button className={styles.remove} onClick={removeItem}>
                      <img src="./navbilder/Mask.png" alt="Remove Icon" />
                    </button>
                  </div>
                  <button className={styles.checkout}>Checkout</button>
                </div>
              )}
              {cartItems === 0 && <p className={styles.empty}>Your cart is empty</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
