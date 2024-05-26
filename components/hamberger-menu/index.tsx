"use client";

import { useState } from "react";

import classes from "./menu.module.css";
import Link from "next/link";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.hamburgerMenu}>
      <input
        type="checkbox"
        className={classes.toggle}
        checked={isOpen}
        onChange={toggleMenu}
        id="toggle"
      />
      <label htmlFor="toggle" className={classes.hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </label>
      <nav className={`${classes.menu} ${isOpen ? classes.open : ""}`}>
        <ul className={classes.list}>
          <li>
            <Link className={classes.link} href="/">
              Shop all
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/">
              Latest arrivals
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
