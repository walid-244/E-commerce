"use client";
import Card from "@/components/card_btn";
import classes from "./main-images.module.css";
import ImagesSection from "@/components/images-section";
import ImagesDesktop from "@/components/images-desktop";
import Navbar from "@/components/navbar";
import { useState } from "react";

const MainImages = () => {
  const [cart, setCart] = useState<any>(0);

  const handleCount = (value: any) => {
    setCart(value);
  };

  const handleCartItems = (value: number) => {
    setCart(value);
  };
  const removeItem = () => {
    if (cart === 0) {
      setCart(0);
      return;
    }
    setCart(cart - 1);
  };

  return (
    <>
      <Navbar
        handleCount={handleCount}
        handleCartItems={handleCartItems}
        handleRemove={removeItem}
        cart={cart}
      />
      <div className={classes.mainImages}>
        <div className={classes.mobile}>
          <ImagesSection
            cart={cart}
            handleCartItems={handleCartItems}
            handleRemove={removeItem}
            handleCount={handleCount}
          />
        </div>
        <div className={classes.desktop}>
          <ImagesDesktop
            cart={cart}
            handleCartItems={handleCartItems}
            handleRemove={removeItem}
            handleCount={handleCount}
          />
        </div>
        <div className={classes.container}>
          <span className={classes.span}>SNEAKER COMPANY</span>
          <h1 className={classes.title}>
            Fall Limited Edition <br />
            Sneakers
          </h1>
          <p className={classes.identification}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div>
            <div className={classes.content_prix}>
              <div className={classes.prix_content}>
                <p className={classes.prix}>$125.00</p>
                <div className={classes.discount}>
                  <p className={classes.discount_prix}>50%</p>
                </div>
              </div>
              <div className={classes.prix_before}>$250.00</div>
            </div>
          </div>
          <Card
            handleCount={handleCount}
            handleCartItems={handleCartItems}
            handleRemove={removeItem}
            cart={cart}
          />
        </div>
      </div>
    </>
  );
};

export default MainImages;
