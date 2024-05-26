import classes from "./cart.module.css";

interface Props {
  cart: any;
  handleCartItems: (value: number) => void;
  handleRemove: () => void;
  handleCount: (value: number) => void;
}

const Cart = async (props: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.cart}>
        <div className={classes.header}>
          <h1 className={classes.title}>Cart</h1>
        </div>
        <div className={classes.content}>
          <div className={classes.content_quantity}>
            <p className={classes.quantity}> Quantity : {props.cart}</p>
          </div>
          <div>
            <button className={classes.btn} onClick={props.handleRemove}>
              <img
                className={classes.icon_delete}
                src="assets/icons/icon-delete.svg"
                alt="Delete"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
