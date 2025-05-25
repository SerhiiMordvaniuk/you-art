import React from "react";

import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h1 className={s.title}>
          <span className={s.accent}>Відкрий</span> світ творчості для дитини
        </h1>
        <h3 className={s.text}>
          Набір діток на групові та індивідуальні заняття:
        </h3>
        <ul className={s.list}>
          <li className={s.item}>Живопис (акварель, гуаш, акрил)</li>
          <li className={s.item}>Фешн ілюстрація</li>
          <li className={s.item}>Ілюстрація в Procreate(на iPad)</li>
        </ul>
        <a
          className={s.link}
          href="https://t.me/svitlanakorinevska"
          target="_blanc"
        >
          Записатися зараз
        </a>
      </div>
    </div>
  );
};

export default Hero;
