import React from "react";
import s from "./Footer.module.css";
import Logo from "../Svg/Logo";

import { GrInstagram } from "react-icons/gr";
import { RiTelegramLine } from "react-icons/ri";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.logodiv}>
            <div className={s.logo}>
              <Logo />
            </div>
            <div className={s.line}></div>
            <div className={s.networks}>
              <a
                href="https://maps.app.goo.gl/dQd4wDXhkDfC2cFN6"
                target="_blanc"
                className={s.item}
              >
                <MdOutlinePlace size={30} className={s.map} />
              </a>
              <a
                href="https://www.instagram.com/_you___art"
                target="_blanc"
                className={s.item}
              >
                <GrInstagram size={25} className={s.insta} />
              </a>
              <a
                href="https://t.me/svitlanakorinevska"
                target="_blanc"
                className={s.item}
              >
                <FaTelegramPlane size={25} className={s.telegram} />
              </a>
              <a href="tel:+380665565021" target="_blanc" className={s.item}>
                <FaPhoneFlip size={22} className={s.phone} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
