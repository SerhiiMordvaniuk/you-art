import React from "react";
import s from "./Prices.module.css";

const Prices = () => {
  const isMobile = true;
  return (
    <div className="container" id="prices">
      <div className={s.wrapper}>
        <h3 className={s.title}>
          Вартість <span className={s.accent}>занять</span>
        </h3>
        <p className={s.text}>Групові заняття:</p>
        <ul className={s.list}>
          <li>Малюки 5-7 років</li>
          <li className={isMobile && s.hidden}>
            Ігрове занурення в кольори, форми та техніки. Веселі майстер-класи,
            де малюки вчаться через гру.
          </li>
          <li>Разове заняття: 300грн</li>
          <li>Абонемент з 8 занять: 2000грн</li>
        </ul>
        <ul className={s.list}>
          <li>Діти 8-13 років</li>
          <li className={isMobile && s.hidden}>
            Ігрове занурення в кольори, форми та техніки. Веселі майстер-класи,
            де малюки вчаться через гру.
          </li>
          <li>Разове заняття: 300грн</li>
          <li>Абонемент з 8 занять: 2000грн</li>
        </ul>
      </div>
    </div>
  );
};

export default Prices;
