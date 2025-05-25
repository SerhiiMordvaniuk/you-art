import React from "react";

import s from "./Header.module.css";

import { VscMenu } from "react-icons/vsc";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={s.wrapper}>
          <img
            className={s.logo}
            src="/public/img/Logo.png"
            alt="logo"
            width={45}
          />
          <button>
            <VscMenu size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
