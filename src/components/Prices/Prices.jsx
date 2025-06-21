import React from "react";
import s from "./Prices.module.css";

const Prices = () => {
  return (
    <div className="container" id="prices">
      <div className={s.wrapper}>
        <h3 className={s.title}>
          Розклад та вартість <span className={s.accent}>занять</span>
        </h3>
        <p className={s.text}>Групові заняття:</p>
        <div className={s.prices}>
          <div className={s.price1}>
            <ul className={s.list}>
              <li className={s.children}>Молодша група (6-9 р.)</li>
              <li>
                Малювання на бумазі: акварель, гуаш, маркери, кольорові олівці.
              </li>
              <li>
                Час занять: <br />
                Вівторок та черверг 14:30-15:30 <br />
                Субота 10:00-11:00
              </li>
              <li>
                Разове заняття: 300грн <br />
                Абонемент з 8 занять: 2000грн
              </li>
            </ul>
          </div>
          <div className={s.price2}>
            <ul className={s.list}>
              <li className={s.children}>Старша група (10-13 р.)</li>
              <li>
                Малювання на бумазі: акварель, гуаш, маркери, кольорові олівці.
              </li>
              <li>
                Час занять: <br />
                Вівторок та черверг 16:00 - 17:30 <br />
                Субота 11:30-13:00
              </li>
              <li>
                Разове заняття: 300грн <br />
                Абонемент з 8 занять: 2000грн
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
