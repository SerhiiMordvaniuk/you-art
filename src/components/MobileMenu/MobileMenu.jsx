import React from "react";
import s from "./MobileMenu.module.css";

import { GrInstagram } from "react-icons/gr";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";

const MobileMenu = ({ onClick }) => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <nav>
          <ul className={s.list}>
            <li>
              <a href="#prices" className={s.link} onClick={onClick}>
                Вартість занять
              </a>
            </li>
            <li>
              <a href="#example" className={s.link} onClick={onClick}>
                Приклади робіт
              </a>
            </li>
            <li>
              <a href="" className={s.link} onClick={onClick}>
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <div className={s.networks}>
          <a
            href="https://maps.app.goo.gl/dQd4wDXhkDfC2cFN6"
            target="_blanc"
            className={s.item}
          >
            <MdOutlinePlace size={35} className={s.map} />
          </a>
          <a
            href="https://www.instagram.com/_you___art"
            target="_blanc"
            className={s.item}
          >
            <GrInstagram size={29} className={s.insta} />
          </a>
          <a
            href="https://t.me/svitlanakorinevska"
            target="_blanc"
            className={s.item}
          >
            <FaTelegramPlane size={30} className={s.telegram} />
          </a>
          <a href="tel:+380665565021" target="_blanc" className={s.item}>
            <FaPhoneFlip size={25} className={s.phone} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
