import React from "react";

import s from "./About.module.css";
import clsx from "clsx";

const About = () => {
  const isMobil = true;
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h2 className={s.title}>
          <span className={s.accent}>Привіт</span>, друзі! <br />
          Мене звати <span className={s.accent}>Світлана</span>, я професійний
          художник, ілюстратор та засновник студії{" "}
          <span className={s.accent}>«YOU ART»</span>
        </h2>
        <img
          className={clsx(s.photo, isMobil && s.hidden)}
          src="../../../public/img/normpthoto.png"
          alt="teacher"
        />
      </div>
    </div>
  );
};

export default About;
