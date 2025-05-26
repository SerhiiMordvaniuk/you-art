import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.logodiv}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
