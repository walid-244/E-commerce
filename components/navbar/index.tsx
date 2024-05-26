"use client";
import { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import HambergerMenu from "../hamberger-menu";
import Link from "next/link";
import Cart from "@/app/cart/page";

interface Props {
  cart: any;
  handleCartItems: (value: number) => void;
  handleRemove: () => void;
  handleCount: (value: number) => void;
}

const Navbar = ({
  cart,
  handleCartItems,
  handleRemove,
  handleCount,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={classes.navbar}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <div className={classes.logo}>
              {windowWidth < 768 ? (
                <HambergerMenu />
              ) : (
                <div className={classes.divLink}>
                  <img
                    className={classes.logoImages}
                    src="assets/icons/logo.svg"
                    alt="sneakers"
                  />
                  <ul className={classes.list}>
                    <li className={classes.listItem}>
                      <Link className={classes.link} href="/">
                        Collections
                      </Link>
                    </li>
                    <li className={classes.listItem}>
                      <Link className={classes.link} href="/">
                        Men
                      </Link>
                    </li>
                    <li className={classes.listItem}>
                      <Link className={classes.link} href="/">
                        Women
                      </Link>
                    </li>
                    <li className={classes.listItem}>
                      <Link className={classes.link} href="/">
                        About
                      </Link>
                    </li>
                    <li className={classes.listItem}>
                      <Link className={classes.link} href="/">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              <img
                className={classes.logoImage}
                src="assets/icons/logo.svg"
                alt="sneakers"
              />
            </div>
            <div className={classes.icon}>
              <button className={classes.iconCart}>
                <img src="assets/icons/icon-cart.svg" alt="iconCart" />
              </button>
              <button className={classes.iconUser} onClick={handleOpenMenu}>
                <img
                  className={classes.iconUserImage}
                  src="assets/images/image-avatar.png"
                  alt="iconUser"
                />
              </button>
            </div>
          </nav>
        </div>
      </header>
      {isOpen && (
        <div className={classes.overlay}>
          <Cart
            handleCount={handleCount}
            handleCartItems={handleCartItems}
            handleRemove={handleRemove}
            cart={cart}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
