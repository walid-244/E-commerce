"use client";
import { useState } from "react";
import classes from "./card.module.css";

interface Props {
  handleCount: (value: number) => void;
  cart: any;
  handleCartItems: (value: number) => void;
  handleRemove: () => void;
}

const Card = ({ handleCount, cart, handleCartItems, handleRemove }: Props) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleSubtract = () => {
    if (count === 0) {
      setCount(0);
      return;
    }

    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={classes.card}>
      <div className={classes.quantity}>
        <button className={classes.btnadd} onClick={handleSubtract}>
          <img src="assets/icons/icon-minus.svg" alt="-" />
        </button>
        <span>{count}</span>
        <button className={classes.btnsub} onClick={handleAdd}>
          <img src="assets/icons/icon-plus.svg" alt="+" />
        </button>
      </div>
      <button className={classes.btn} onClick={() => handleCartItems(count)}>
        <img
          className={classes.svg}
          src="assets/icons/shopping-cart.png"
          alt=""
        />{" "}
        Add to cart{" "}
      </button>
    </div>
  );
};

export default Card;
