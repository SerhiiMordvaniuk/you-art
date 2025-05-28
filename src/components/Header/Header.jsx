import React, { useState } from "react";

import s from "./Header.module.css";

import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  const mobMenuToggle = () => {
    if (isMobMenuOpen) {
      document.body.classList.remove("no-scroll");
      setIsMobMenuOpen(false);
    } else {
      document.body.classList.add("no-scroll");
      setIsMobMenuOpen(true);
    }
  };

  return (
    <header>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.logo}>
            <p className={s.art}>
              <span>y o u </span>
              <span> a r t</span>
            </p>
            <p className={s.studio}>s t u d i o</p>
          </div>
          <button onClick={mobMenuToggle}>
            {isMobMenuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <VscMenu size={30} />
            )}
          </button>
        </div>
      </div>
      {isMobMenuOpen ? <MobileMenu onClick={mobMenuToggle} /> : null}
    </header>
  );
};

export default Header;
