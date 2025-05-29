import React from "react";
import s from "./Footer.module.css";
import Logo from "../Svg/Logo";

import { GrInstagram } from "react-icons/gr";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import useDeviceType from "../../Hooks/screenwidth";

const Footer = () => {
  const device = useDeviceType();
  return (
    <footer>
      <div className="container" id="contacts">
        <div className={s.wrapper}>
          <div className={s.logodiv}>
            <div className={s.logo}>
              <p className={s.art}>
                <span>y o u </span>
                <span> a r t</span>
              </p>
              <p className={s.studio}>s t u d i o</p>
            </div>
            <div className={s.line}></div>
            <div className={s.networkandaddres}>
              {device === "mobile" ? (
                ""
              ) : (
                <a
                  className={s.addres}
                  href="https://maps.app.goo.gl/dQd4wDXhkDfC2cFN6"
                  target="_blanc"
                >
                  м.Васильків, Володимирська, 22а
                </a>
              )}
              <div className={s.networks}>
                {device === "mobile" && (
                  <a
                    href="https://maps.app.goo.gl/dQd4wDXhkDfC2cFN6"
                    target="_blanc"
                    className={s.item}
                  >
                    <MdOutlinePlace size={35} className={s.map} />
                  </a>
                )}
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
        </div>
        <p className={s.copy}>© 2025 YOU ART — простір для натхнення</p>
      </div>
    </footer>
  );
};

export default Footer;
