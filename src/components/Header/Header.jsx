import { useState } from "react";

import s from "./Header.module.css";

import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

import MobileMenu from "../MobileMenu/MobileMenu";
import useDeviceType from "../../Hooks/screenwidth";

const Header = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const device = useDeviceType();

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
          <div className={s.logo_wrapper}>
            <img src="/img/newLogo.jpg" alt="logo" className={s.logo} />
          </div>
          {device === "tablet" || device === "laptop" ? (
            <nav className={s.navigation}>
              <a href="#prices" className={s.link}>
                Вартість занять
              </a>
              <a href="#example" className={s.link}>
                Приклади робіт
              </a>
              <a href="#contacts" className={s.link}>
                Контакти
              </a>
            </nav>
          ) : (
            ""
          )}
          {device === "mobile" ? (
            <button
              className={s.mobmenu}
              onClick={mobMenuToggle}
              aria-label="мобільне меню"
            >
              {isMobMenuOpen ? (
                <AiOutlineClose size={30} />
              ) : (
                <VscMenu size={30} />
              )}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {isMobMenuOpen ? <MobileMenu onClick={mobMenuToggle} /> : null}
    </header>
  );
};

export default Header;
