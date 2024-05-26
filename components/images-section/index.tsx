"use client";
import Cart from "@/app/cart/page";
import classes from "./images.module.css";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "assets/images/image-product-1.jpg",
    alt: "Image",
  },
  {
    id: 2,
    src: "assets/images/image-product-2.jpg",
    alt: "Image",
  },
  {
    id: 3,
    src: "assets/images/image-product-3.jpg",
    alt: "Image",
  },
  {
    id: 4,
    src: "assets/images/image-product-4.jpg",
    alt: "Image",
  },
];

interface Props {
  cart: any;
  handleCartItems: (value: number) => void;
  handleRemove: () => void;
  handleCount: (value: number) => void;
}

const ImagesSection = ({
  cart,
  handleCartItems,
  handleCount,
  handleRemove,
}: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className={classes.mainImage}>
      <button onClick={handlePrev} className={classes.btnPrev}>
        <img src="assets/icons/icon-previous.svg" alt="Scroll Previous Image" />
      </button>
      <div style={{ overflowX: "auto", display: "flex", gap: "10px" }}>
        {images.map((image, index) => (
          <img
            className={classes.image}
            key={image.id}
            src={image.src}
            alt={image.alt}
            style={{ display: index === currentImageIndex ? "block" : "none" }}
          />
        ))}
      </div>
      <button onClick={handleNext} className={classes.btnNext}>
        <img src="assets/icons/icon-next.svg" alt="Next" />
      </button>
    </div>
  );
};

export default ImagesSection;
