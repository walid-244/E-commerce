import classes from "./image.module.css";

interface ImagesDesktopProps {
  cart: any;
  handleCartItems: (value: number) => void;
  handleRemove: () => void;
  handleCount: (value: any) => void;
}
const ImagesDesktop: React.FC<ImagesDesktopProps> = ({
  cart,
  handleCartItems,
  handleRemove,
  handleCount,
}) => {
  return (
    <div className={classes.imageContainer}>
      <div className={classes.images}>
        <img
          className={classes.img}
          src="assets/images/image-product-1.jpg"
          alt="Image"
        />
      </div>
      <div className={classes.images_div}>
        <div className={classes.image}>
          <img
            className={classes.imge}
            src="assets/images/image-product-2.jpg"
            alt="Image"
          />
        </div>
        <div className={classes.image}>
          <img
            className={classes.imge}
            src="assets/images/image-product-3.jpg"
            alt="Image"
          />
        </div>
        <div className={classes.image}>
          <img
            className={classes.imge}
            src="assets/images/image-product-4.jpg"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesDesktop;
